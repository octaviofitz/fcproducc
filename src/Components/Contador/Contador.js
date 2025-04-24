// Contador.js (o como hayas llamado al archivo JS)
import React, { useState, useEffect } from 'react';
// Asegúrate que la ruta al archivo CSS sea correcta.
// Si tu CSS se llama 'contador.css' y está en la misma carpeta, usa:
import './contador.css';
// Si se llama 'styles.css', usa:
// import './styles.css';

// ==================================================
// Definición del Componente TimeUnit
// Este componente debe estar definido ANTES de ser usado en Contador.
// ==================================================
function TimeUnit({ value, label }) {
  return (
    // Contenedor para cada unidad de tiempo
    <div className="time-unit">
      {/* Muestra el valor del tiempo (ej: 05) */}
      <span className="time-value">{value}</span>
      {/* Muestra la etiqueta (ej: Días) */}
      <span className="time-label">{label}</span>
    </div>
  );
}

// ==================================================
// Definición del Componente Principal Contador
// ==================================================
function Contador() {
  // Define la fecha y hora objetivo (1 de Mayo, 14:00 hs, zona horaria Argentina UTC-3)
  // Asegúrate que el año sea futuro si quieres ver el contador activo.
  const targetDate = new Date("2025-05-31T09:00:00-03:00").getTime(); // Ejemplo: 1 de Mayo 2026

  // --- Lógica interna del contador ---
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        expired: false,
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    if (timeLeft.expired) {
      return;
    }
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };
  // --- Fin de la lógica interna ---

  // --- Renderizado del componente ---
  return (
    <div className="containerContador">
      <div className="countdown-box">
        <h1 className="titleContador">
          CUENTA REGRESIVA M42
        </h1>

        {timeLeft.expired ? (
          <div className="expired-message">
            ¡El momento ha llegado!
          </div>
        ) : (
          <div className="countdown-grid">
            {/* Aquí es donde se usa TimeUnit. Su definición debe ser accesible */}
            <TimeUnit value={formatTime(timeLeft.days)} label="Días" />
            <TimeUnit value={formatTime(timeLeft.hours)} label="Horas" />
            <TimeUnit value={formatTime(timeLeft.minutes)} label="Minutos" />
            <TimeUnit value={formatTime(timeLeft.seconds)} label="Segundos" />
          </div>
        )}
      </div>
    </div>
  );
}
export default Contador;
