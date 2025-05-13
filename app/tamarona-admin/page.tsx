'use client';

import { useEffect, useState } from 'react';

interface Room {
  id: number;
  encargado: string;
  persona_1: string | null;
  persona_2: string | null;
  created_at: string;
}

interface RoomsResponse {
  success: boolean;
  data?: Room[];
  error?: string;
}

export default function TamaronaAdmin() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedRooms, setSelectedRooms] = useState<Set<number>>(new Set());
  const [searchQuery, setSearchQuery] = useState('');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [currentRoom, setCurrentRoom] = useState<Room | null>(null);
  const [formData, setFormData] = useState({
    encargado: '',
    persona_1: '',
    persona_2: ''
  });
  const [updateStatus, setUpdateStatus] = useState<{
    isLoading: boolean;
    error: string | null;
    success: boolean;
  }>({
    isLoading: false,
    error: null,
    success: false
  });
  const [deleteStatus, setDeleteStatus] = useState<{
    isLoading: boolean;
    error: string | null;
    success: boolean;
  }>({
    isLoading: false,
    error: null,
    success: false
  });

  useEffect(() => {
    async function fetchRooms() {
      try {
        const response = await fetch('/api/rooms');
        const data: RoomsResponse = await response.json();
        
        if (data.success && data.data) {
          setRooms(data.data);
        } else {
          setError(data.error || 'Error fetching rooms');
        }
      } catch (error) {
        setError('Failed to fetch rooms');
        console.error('Error fetching rooms:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchRooms();
  }, []);

  // Calculate statistics
  const totalRooms = rooms.length;
  const totalPeople = rooms.reduce((count, room) => {
    // Count encargado (always present)
    let roomCount = 1;
    // Add other people if they exist
    if (room.persona_1) roomCount++;
    if (room.persona_2) roomCount++;
    return count + roomCount;
  }, 0);
  
  const roomsWithFullCapacity = rooms.filter(room => room.encargado && room.persona_1 && room.persona_2).length;
  const roomsWithPartialCapacity = totalRooms - roomsWithFullCapacity;

  // Handle edit button click
  const handleEditClick = (room: Room) => {
    setCurrentRoom(room);
    setFormData({
      encargado: room.encargado,
      persona_1: room.persona_1 || '',
      persona_2: room.persona_2 || ''
    });
    setIsEditModalOpen(true);
    setUpdateStatus({
      isLoading: false,
      error: null,
      success: false
    });
  };

  // Handle form input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!currentRoom) return;
    
    setUpdateStatus({
      isLoading: true,
      error: null,
      success: false
    });
    
    try {
      const response = await fetch('/api/rooms', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: currentRoom.id,
          encargado: formData.encargado,
          persona_1: formData.persona_1 || null,
          persona_2: formData.persona_2 || null
        })
      });
      
      const data = await response.json();
      
      if (data.success) {
        // Update the rooms list with updated data
        setRooms(rooms.map(room => 
          room.id === currentRoom.id ? { ...room, ...data.data[0] } : room
        ));
        
        setUpdateStatus({
          isLoading: false,
          error: null,
          success: true
        });
        
        // Close modal after short delay
        setTimeout(() => {
          setIsEditModalOpen(false);
        }, 1500);
      } else {
        setUpdateStatus({
          isLoading: false,
          error: data.error || 'Error updating room',
          success: false
        });
      }
    } catch (error) {
      console.error('Error updating room:', error);
      setUpdateStatus({
        isLoading: false,
        error: 'Error connecting to server',
        success: false
      });
    }
  };

  // Handle modal close
  const handleModalClose = () => {
    setIsEditModalOpen(false);
    setIsDeleteModalOpen(false);
    setCurrentRoom(null);
  };

  // Handle delete button click
  const handleDeleteClick = (room: Room) => {
    setCurrentRoom(room);
    setIsDeleteModalOpen(true);
    setDeleteStatus({
      isLoading: false,
      error: null,
      success: false
    });
  };

  // Handle delete confirmation
  const handleDeleteConfirm = async () => {
    if (!currentRoom) return;
    
    setDeleteStatus({
      isLoading: true,
      error: null,
      success: false
    });
    
    try {
      const response = await fetch(`/api/rooms?id=${currentRoom.id}`, {
        method: 'DELETE',
      });
      
      const data = await response.json();
      
      if (data.success) {
        // Remove the deleted room from the list
        setRooms(rooms.filter(room => room.id !== currentRoom.id));
        
        setDeleteStatus({
          isLoading: false,
          error: null,
          success: true
        });
        
        // Close modal after short delay
        setTimeout(() => {
          setIsDeleteModalOpen(false);
          setCurrentRoom(null);
        }, 1500);
      } else {
        setDeleteStatus({
          isLoading: false,
          error: data.error || 'Error deleting room',
          success: false
        });
      }
    } catch (error) {
      console.error('Error deleting room:', error);
      setDeleteStatus({
        isLoading: false,
        error: 'Error connecting to server',
        success: false
      });
    }
  };

  // Handle checkbox selection
  const toggleSelection = (id: number) => {
    const newSelected = new Set(selectedRooms);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedRooms(newSelected);
  };

  // Handle select all checkboxes
  const toggleSelectAll = () => {
    if (selectedRooms.size === filteredRooms.length) {
      // If all are selected, unselect all
      setSelectedRooms(new Set());
    } else {
      // Otherwise, select all
      const allIds = filteredRooms.map(room => room.id);
      setSelectedRooms(new Set(allIds));
    }
  };

  // Filter rooms by search query
  const filteredRooms = rooms.filter(room => {
    if (!searchQuery) return true;
    
    const query = searchQuery.toLowerCase();
    return (
      room.encargado.toLowerCase().includes(query) ||
      (room.persona_1 && room.persona_1.toLowerCase().includes(query)) ||
      (room.persona_2 && room.persona_2.toLowerCase().includes(query))
    );
  });

  // Export selected rooms to CSV
  const exportToCSV = () => {
    if (selectedRooms.size === 0) {
      alert('Please select at least one row to export');
      return;
    }

    // Get selected rooms
    const selectedRoomsData = rooms.filter(room => selectedRooms.has(room.id));
    
    // Create CSV content
    const headers = ['ID', 'Encargado', 'Persona 1', 'Persona 2', 'Created At', 'People Count'];
    
    const csvContent = [
      headers.join(','),
      ...selectedRoomsData.map(room => {
        const peopleCount = [room.encargado, room.persona_1, room.persona_2].filter(Boolean).length;
        return [
          room.id,
          `"${room.encargado}"`,
          room.persona_1 ? `"${room.persona_1}"` : '"-"',
          room.persona_2 ? `"${room.persona_2}"` : '"-"',
          `"${new Date(room.created_at).toLocaleString()}"`,
          peopleCount
        ].join(',');
      })
    ].join('\n');
    
    // Create download link
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `tamarona-rooms-${new Date().toISOString().slice(0, 10)}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center min-h-screen text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Tamarona Rooms Administration</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-100 p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Total Rooms</h2>
          <p className="text-3xl font-bold">{totalRooms}</p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Total People</h2>
          <p className="text-3xl font-bold">{totalPeople}</p>
        </div>
        <div className="bg-purple-100 p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Full Rooms</h2>
          <p className="text-3xl font-bold">{roomsWithFullCapacity}</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Partial Rooms</h2>
          <p className="text-3xl font-bold">{roomsWithPartialCapacity}</p>
        </div>
      </div>
      
      {rooms.length === 0 ? (
        <p>No rooms found</p>
      ) : (
        <>
          {/* Search and Export Controls */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
            <div className="w-full md:w-1/3">
              <input
                type="text"
                placeholder="Search by email..."
                className="w-full p-2 border border-gray-300 rounded"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">
                {selectedRooms.size} of {filteredRooms.length} selected
              </span>
              <button
                onClick={exportToCSV}
                className={`px-4 py-2 rounded ${
                  selectedRooms.size > 0 
                    ? 'bg-green-600 hover:bg-green-700 text-white' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
                disabled={selectedRooms.size === 0}
              >
                Export Selected to CSV
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4 border-b">
                    <input
                      type="checkbox"
                      checked={selectedRooms.size > 0 && selectedRooms.size === filteredRooms.length}
                      onChange={toggleSelectAll}
                      className="h-4 w-4"
                    />
                  </th>
                  <th className="py-2 px-4 border-b">ID</th>
                  <th className="py-2 px-4 border-b">Encargado</th>
                  <th className="py-2 px-4 border-b">Persona 1</th>
                  <th className="py-2 px-4 border-b">Persona 2</th>
                  <th className="py-2 px-4 border-b">Created At</th>
                  <th className="py-2 px-4 border-b">People Count</th>
                  <th className="py-2 px-4 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredRooms.map((room) => {
                  const peopleCount = [room.encargado, room.persona_1, room.persona_2].filter(Boolean).length;
                  return (
                    <tr key={room.id} className="hover:bg-gray-50">
                      <td className="py-2 px-4 border-b text-center">
                        <input
                          type="checkbox"
                          checked={selectedRooms.has(room.id)}
                          onChange={() => toggleSelection(room.id)}
                          className="h-4 w-4"
                        />
                      </td>
                      <td className="py-2 px-4 border-b">{room.id}</td>
                      <td className="py-2 px-4 border-b">{room.encargado}</td>
                      <td className="py-2 px-4 border-b">{room.persona_1 || '-'}</td>
                      <td className="py-2 px-4 border-b">{room.persona_2 || '-'}</td>
                      <td className="py-2 px-4 border-b">{new Date(room.created_at).toLocaleString()}</td>
                      <td className="py-2 px-4 border-b text-center font-semibold">{peopleCount}</td>
                      <td className="py-2 px-4 border-b">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleEditClick(room)}
                            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteClick(room)}
                            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      )}

      {/* Edit Modal */}
      {isEditModalOpen && currentRoom && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Edit Room</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="encargado">
                  Encargado
                </label>
                <input
                  type="email"
                  id="encargado"
                  name="encargado"
                  value={formData.encargado}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="persona_1">
                  Persona 1
                </label>
                <input
                  type="email"
                  id="persona_1"
                  name="persona_1"
                  value={formData.persona_1}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="persona_2">
                  Persona 2
                </label>
                <input
                  type="email"
                  id="persona_2"
                  name="persona_2"
                  value={formData.persona_2}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              
              {updateStatus.error && (
                <div className="mb-4 text-red-500 text-sm">
                  {updateStatus.error}
                </div>
              )}
              
              {updateStatus.success && (
                <div className="mb-4 text-green-500 text-sm">
                  Room updated successfully!
                </div>
              )}
              
              <div className="flex items-center justify-end">
                <button
                  type="button"
                  onClick={handleModalClose}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                    updateStatus.isLoading ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  disabled={updateStatus.isLoading}
                >
                  {updateStatus.isLoading ? 'Saving...' : 'Save'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && currentRoom && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Delete Room</h2>
            
            <div className="mb-6">
              <p className="text-gray-700 mb-2">Are you sure you want to delete this room?</p>
              <div className="bg-gray-100 p-3 rounded">
                <p><strong>Encargado:</strong> {currentRoom.encargado}</p>
                <p><strong>Persona 1:</strong> {currentRoom.persona_1 || '-'}</p>
                <p><strong>Persona 2:</strong> {currentRoom.persona_2 || '-'}</p>
              </div>
              <p className="text-red-500 mt-3 text-sm">This action cannot be undone.</p>
            </div>
            
            {deleteStatus.error && (
              <div className="mb-4 text-red-500 text-sm">
                {deleteStatus.error}
              </div>
            )}
            
            {deleteStatus.success && (
              <div className="mb-4 text-green-500 text-sm">
                Room deleted successfully!
              </div>
            )}
            
            <div className="flex items-center justify-end">
              <button
                type="button"
                onClick={handleModalClose}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2"
                disabled={deleteStatus.isLoading}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleDeleteConfirm}
                className={`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                  deleteStatus.isLoading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={deleteStatus.isLoading}
              >
                {deleteStatus.isLoading ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
