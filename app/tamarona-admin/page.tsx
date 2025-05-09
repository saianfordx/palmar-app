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
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}
