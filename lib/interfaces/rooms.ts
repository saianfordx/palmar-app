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

// Response DTO - for API responses
export interface RoomResponseDto {
  success: boolean;
  data?: Room[];
  error?: string;
} 