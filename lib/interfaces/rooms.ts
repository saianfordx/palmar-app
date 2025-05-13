// Room entity interface
export interface Room {
  id?: string;
  encargado: string;
  persona_1?: string;
  persona_2?: string;
  created_at?: string;
}

// Request DTO - for creating a room
export interface CreateRoomDto {
  encargado: string;
  persona_1?: string;
  persona_2?: string;
}

// Request DTO - for updating a room
export interface UpdateRoomDto {
  id: string | number;
  encargado?: string;
  persona_1?: string | null;
  persona_2?: string | null;
}

// Response DTO - for API responses
export interface RoomResponseDto {
  success: boolean;
  data?: Room[];
  error?: string;
} 