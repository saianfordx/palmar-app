import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { CreateRoomDto, RoomResponseDto } from '@/lib/interfaces/rooms';

export async function POST(request: Request) {
  try {
    const body = await request.json() as CreateRoomDto;
    const { encargado, persona_1, persona_2 } = body;
    
    // Validate required fields
    if (!encargado) {
      const response: RoomResponseDto = {
        success: false,
        error: 'Encargado is required'
      };
      return NextResponse.json(response, { status: 400 });
    }
    
    // Insert data into the rooms table
    const { data, error } = await supabase
      .from('rooms')
      .insert([
        { 
          encargado, 
          persona_1, 
          persona_2 
        }
      ])
      .select();
    
    if (error) {
      console.error('Error inserting room:', error);
      const response: RoomResponseDto = {
        success: false,
        error: error.message
      };
      return NextResponse.json(response, { status: 500 });
    }
    
    const response: RoomResponseDto = {
      success: true,
      data
    };
    
    return NextResponse.json(response, { status: 201 });
    
  } catch (error) {
    console.error('Error processing request:', error);
    const response: RoomResponseDto = {
      success: false,
      error: 'Internal server error'
    };
    return NextResponse.json(response, { status: 500 });
  }
} 