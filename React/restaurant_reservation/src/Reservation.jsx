import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Reservations = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReservations = async () => {
      // Obtener el token desde el localStorage
      const token = localStorage.getItem('token');

      if (!token) {
        setError('No estás autenticado');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get('http://localhost:8000/api/reservations/', {
          headers: {
            'Authorization': `Bearer ${token}`,
          }
        });

        console.log('Datos de la API:', response.data); // Verifica la respuesta
        setReservations(response.data);  // Guardamos las reservas
        setLoading(false);
      } catch (error) {
        setError('Error al obtener las reservas');
        setLoading(false);
      }
    };

    fetchReservations();
  }, []);  // Solo se ejecuta al montar el componente

  if (loading) {
    return <p>Cargando tus reservas...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Mis Reservas</h2>
      <p>Aquí verás las reservas que has hecho.</p>

      {reservations.length > 0 ? (
        <ul>
          {reservations.map((reservation) => (
            <li key={reservation.id}>
              {/* Mostrar información de la reserva */}
              <h3>Reserva ID: {reservation.id}</h3>
              <p><strong>Fecha:</strong> {new Date(reservation.date).toLocaleString()}</p>
              <p><strong>Comensales:</strong> {reservation.number_of_people}</p>

              {/* Mostrar información del restaurante */}
              {/* Asumimos que ya tenemos detalles como nombre y descripción en la reserva */}
              <p><strong>Restaurante:</strong> Nombre del Restaurante: {reservation.restaurant.name}</p>
              <p><strong>Descripción:</strong> {reservation.restaurant.description}</p>
              <p><strong>Dirección:</strong> {reservation.restaurant.address}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tienes reservas.</p>
      )}
    </div>
  );
};

export default Reservations;
