"use client";

import { useState, useEffect } from "react";
import { CreateRoomDto } from "@/lib/interfaces/rooms";
import Image from "next/image";

export default function RoomRegistration() {
    const [formData, setFormData] = useState<CreateRoomDto>({
        encargado: "",
        persona_1: "",
        persona_2: ""
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<{ type: "success" | "error", text: string } | null>(null);
    const [formValid, setFormValid] = useState(false);

    // Validate form when formData changes
    useEffect(() => {
        const { encargado, persona_1, persona_2 } = formData;
        
        // Check if all fields are filled
        const isValid = encargado.trim() !== "" && 
                        persona_1?.trim() !== "" && 
                        persona_2?.trim() !== "";
        
        setFormValid(isValid);
    }, [formData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Double check validation before submitting
        if (!formValid || loading) {
            return;
        }
        
        setLoading(true);
        setMessage(null);

        try {
            const response = await fetch("/api/rooms", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || "Error al registrar la habitación");
            }

            setMessage({
                type: "success",
                text: "¡Habitación registrada con éxito!"
            });
            
            // Clear form after successful submission
            setFormData({
                encargado: "",
                persona_1: "",
                persona_2: ""
            });
        } catch (error) {
            setMessage({
                type: "error",
                text: error instanceof Error ? error.message : "Ocurrió un error desconocido"
            });
        } finally {
            setLoading(false);
        }
    };

    // Determine button styling based on state
    const getButtonStyles = () => {
        if (loading) {
            return "bg-gray-700 opacity-70 cursor-wait";
        }
        if (!formValid) {
            return "bg-gray-400 cursor-not-allowed";
        }
        return "bg-black hover:bg-gray-800";
    };

    return (
        <div className="w-full">
            {/* Main content */}
            <div className="flex w-full min-h-[600px]">
                {/* Left side - Image */}
                <div className="w-1/2 relative">
                    <Image 
                        src="/roomRegistration.png" 
                        alt="Room Registration" 
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                    />
                </div>
                
                {/* Right side - Form */}
                <div className="w-1/2 bg-gray-50 p-10 flex flex-col justify-center">
                    <h2 className="text-4xl font-bold mb-4 text-brown-800">Registro</h2>
                    <h3 className="text-4xl font-bold mb-8 text-brown-800">de Habitación</h3>
                    
                    {message && (
                        <div className={`p-3 mb-6 rounded-md ${message.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                            {message.text}
                        </div>
                    )}
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <fieldset disabled={loading} className={loading ? "opacity-70" : ""}>
                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="encargado" className="block text-sm font-medium text-gray-700 mb-1">
                                        Persona a Cargo <span className="text-red-500">*</span>
                                    </label>
                                    <input 
                                        type="text"
                                        id="encargado"
                                        name="encargado"
                                        value={formData.encargado}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border-0 rounded-none border-b border-gray-300 focus:outline-none focus:border-black"
                                        placeholder="Nombre completo"
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="persona_1" className="block text-sm font-medium text-gray-700 mb-1">
                                        Primera Persona <span className="text-red-500">*</span>
                                    </label>
                                    <input 
                                        type="text"
                                        id="persona_1"
                                        name="persona_1"
                                        value={formData.persona_1}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border-0 rounded-none border-b border-gray-300 focus:outline-none focus:border-black"
                                        placeholder="Nombre completo"
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="persona_2" className="block text-sm font-medium text-gray-700 mb-1">
                                        Segunda Persona <span className="text-red-500">*</span>
                                    </label>
                                    <input 
                                        type="text"
                                        id="persona_2"
                                        name="persona_2"
                                        value={formData.persona_2}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border-0 rounded-none border-b border-gray-300 focus:outline-none focus:border-black"
                                        placeholder="Nombre completo"
                                    />
                                </div>
                            </div>
                        </fieldset>
                        
                        <div className="pt-6">
                            <button 
                                type="submit"
                                disabled={!formValid || loading}
                                className={`py-3 px-6 text-white rounded-md transition flex items-center ${getButtonStyles()}`}
                            >
                                {loading ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Registrando...
                                    </>
                                ) : (
                                    <>
                                        Registrar Habitación
                                        <span className="ml-2">→</span>
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
