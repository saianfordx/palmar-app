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

    // Create an array of all emails to check
    const emails = [encargado, persona_1, persona_2].filter(Boolean);
    
    // Check for duplicate emails in the database
    for (const email of emails) {
      // Check if email exists in any of the three columns using separate queries
      const { data: dataEncargado, error: errorEncargado } = await supabase
        .from('rooms')
        .select('*')
        .eq('encargado', email);
        
      const { data: dataPersona1, error: errorPersona1 } = await supabase
        .from('rooms')
        .select('*')
        .eq('persona_1', email);
        
      const { data: dataPersona2, error: errorPersona2 } = await supabase
        .from('rooms')
        .select('*')
        .eq('persona_2', email);
      
      if (errorEncargado || errorPersona1 || errorPersona2) {
        console.error('Error checking for duplicate emails:', errorEncargado || errorPersona1 || errorPersona2);
        const response: RoomResponseDto = {
          success: false,
          error: 'Error validating email uniqueness'
        };
        return NextResponse.json(response, { status: 500 });
      }
      
      // If email already exists in any field, return error
      const isDuplicate = 
        (dataEncargado && dataEncargado.length > 0) || 
        (dataPersona1 && dataPersona1.length > 0) || 
        (dataPersona2 && dataPersona2.length > 0);
        
      if (isDuplicate) {
        const response: RoomResponseDto = {
          success: false,
          error: `${email} ya está registrado en una habitación`
        };
        return NextResponse.json(response, { status: 400 });
      }
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

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('rooms')
      .select('*');
    
    if (error) {
      console.error('Error fetching rooms:', error);
      return NextResponse.json({
        success: false,
        error: error.message
      }, { status: 500 });
    }
    
    return NextResponse.json({
      success: true,
      data
    }, { status: 200 });
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({
      success: false,
      error: 'Internal server error'
    }, { status: 500 });
  }
} 