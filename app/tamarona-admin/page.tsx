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

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center min-h-screen text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Tamarona Rooms Administration</h1>
      
      {rooms.length === 0 ? (
        <p>No rooms found</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 border-b">ID</th>
                <th className="py-2 px-4 border-b">Encargado</th>
                <th className="py-2 px-4 border-b">Persona 1</th>
                <th className="py-2 px-4 border-b">Persona 2</th>
                <th className="py-2 px-4 border-b">Created At</th>
              </tr>
            </thead>
            <tbody>
              {rooms.map((room) => (
                <tr key={room.id} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">{room.id}</td>
                  <td className="py-2 px-4 border-b">{room.encargado}</td>
                  <td className="py-2 px-4 border-b">{room.persona_1 || '-'}</td>
                  <td className="py-2 px-4 border-b">{room.persona_2 || '-'}</td>
                  <td className="py-2 px-4 border-b">{new Date(room.created_at).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
