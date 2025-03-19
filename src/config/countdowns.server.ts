// src/config/countdowns.server.ts
interface CountdownConfig {
    id: string;
    title: string;
    targetDate: string;
}

export const COUNTDOWNS: CountdownConfig[] = [
    {
      id: "vuelos",
      title: "🎫 Compra boletos de avión",
      targetDate: "2025-05-01T18:00:00-06:00",
    },
    {
      id: "airbnb",
      title: "🏠 Reserva en Airbnb",
      targetDate: "2025-05-15T12:00:00-06:00",
    },
    {
      id: "viaje",
      title: "✈️ ¡Día del viaje!",
      targetDate: "2025-06-27T00:00:00-06:00",
    },
  ];
  