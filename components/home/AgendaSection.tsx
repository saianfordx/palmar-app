import { Calendar, Clock, MapPin } from 'lucide-react';

interface AgendaItem {
  time: string;
  activity: string;
  location: string;
  icon?: string;
}

interface DayAgenda {
  date: string;
  title: string;
  items: AgendaItem[];
}

const agendaData: DayAgenda[] = [
  {
    date: "Viernes 27 de junio",
    title: "¡Llegamos!",
    items: [
      {
        time: "12:00 PM - 1:00 PM",
        activity: "Bienvenid@s ✨",
        location: 'Salón "Agua"'
      },
      {
        time: "1:00 PM - 3:00 PM", 
        activity: "A comer rico 🍽️",
        location: "Distintos restaurantes"
      },
      {
        time: "2:30 PM - 4:00 PM",
        activity: "Check-in y relax 😌",
        location: 'Salón "Agua"'
      },
      {
        time: "4:00 PM - 6:00 PM",
        activity: "Actividades sorpresa en el hotel 🎲",
        location: ""
      },
      {
        time: "7:00 PM - 8:30 PM",
        activity: "Cena deliciosa 🍽️",
        location: 'Restaurante Buffet "Gourmet Marché"'
      },
      {
        time: "9:00 PM - 9:45 PM",
        activity: "🎵 AIRE: Damos inicio con intención y magia",
        location: 'Playa "Nautica"'
      }
    ]
  },
  {
    date: "Sábado 28 de junio",
    title: "Día Maya a Full",
    items: [
      {
        time: "7:00 AM - 8:00 AM",
        activity: "Actívate 🧘‍♀️🚴‍♂️ *opcional",
        location: 'Playa "Nautica y Central"'
      },
      {
        time: "8:00 AM - 9:15 AM",
        activity: "Desayuno con vista 🌅🍳",
        location: 'Restaurante Buffet "Gourmet Marché"'
      },
      {
        time: "9:30 AM - 12:30 PM",
        activity: "🏺 TIERRA: Conocimiento con The Sandbox",
        location: 'Salón "Tierra"'
      },
      {
        time: "12:30 PM - 2:30 PM",
        activity: "Hora de comer 🍽️⏰",
        location: ""
      },
      {
        time: "2:30 PM - 3:45 PM",
        activity: "Tiempo libre 🛀",
        location: ""
      },
      {
        time: "4:00 PM - 6:00 PM",
        activity: "💧 AGUA: Team Building en la playa 🏖️",
        location: 'Playa "Central Beach"'
      },
      {
        time: "6:00 PM - 7:15 PM",
        activity: "Más tiempo para ti 🧘‍♀️... se viene la celebración",
        location: ""
      },
      {
        time: "7:15 PM - 10:30 PM",
        activity: "🔥 FUEGO: Cena + ceremonia especial 🎉🏡",
        location: 'Salón "Elementos"'
      }
    ]
  },
  {
    date: "Domingo 29 de junio",
    title: "Nos Vamos",
    items: [
      {
        time: "7:00 AM - 10:00 AM",
        activity: "Desayuno chill",
        location: 'Restaurante Buffet "Gourmet Marché"'
      },
      {
        time: "7:00 AM - 03:00 PM",
        activity: "Check-out 🏨 ¡Hasta pronto! Salidas 🚗🚌",
        location: "Lobby"
      }
    ]
  }
];

export function AgendaSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Agenda del Evento
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre todas las actividades que hemos preparado para ti durante estos días especiales
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {agendaData.map((day, dayIndex) => (
            <div key={dayIndex} className="mb-12">
              {/* Day Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full shadow-lg">
                  <Calendar className="h-6 w-6" />
                  <div>
                    <h3 className="text-2xl font-bold">{day.date}</h3>
                    <p className="text-orange-100">{day.title}</p>
                  </div>
                </div>
              </div>

              {/* Day Activities */}
              <div className="grid gap-4 md:gap-6">
                {day.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border-l-4 border-orange-500"
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      {/* Time */}
                      <div className="flex items-center gap-2 text-orange-600 font-semibold min-w-[200px]">
                        <Clock className="h-5 w-5" />
                        <span>{item.time}</span>
                      </div>
                      
                      {/* Activity */}
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">
                          {item.activity}
                        </h4>
                        {item.location && (
                          <div className="flex items-center gap-2 text-gray-600">
                            <MapPin className="h-4 w-4" />
                            <span className="text-sm">{item.location}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 