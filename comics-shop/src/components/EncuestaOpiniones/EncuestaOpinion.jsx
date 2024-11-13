import React, { useState } from 'react';

function EncuestaOpinion() {
  // Estado para manejar las opiniones
  const [opiniones, setOpiniones] = useState([]);

  // Estado para manejar los valores de los campos
  const [opinion, setOpinion] = useState('');
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');

  // Manejo de cambios en los campos de texto
  const opinionChange = (e) => setOpinion(e.target.value);
  const nombreChange = (e) => setNombre(e.target.value);
  const emailChange = (e) => setEmail(e.target.value);

  // Función para guardar la opinión
  const saveOpinion = () => {
    if (!opinion || !nombre || !email) {
      alert('Por favor, completa todos los campos');
      return;
    }
    setOpiniones([...opiniones, { opinion, nombre, email }]);
    // Limpiar los campos después de guardar
    setOpinion('');
    setNombre('');
    setEmail('');
  };

  return (
    <div>
      <h2>Encuesta de Opinión</h2>
      
      {/* Formulario para ingresar la opinión */}
      <div>
        <input
          type="text"
          placeholder="Escribe tu opinión"
          value={opinion}
          onChange={opinionChange}
        />
      </div>
      
      <div>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={nombreChange}
        />
      </div>
      
      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={emailChange}
        />
      </div>
      
      {/* Botón para guardar la opinión */}
      <button onClick={saveOpinion}>Guardar opinión</button>

      {/* Mostrar opiniones guardadas */}
      <div>
        <h3>Opiniones guardadas</h3>
        {opiniones.length > 0 ? (
          <ul>
            {opiniones.map((opinion, index) => (
              <li key={index}>
                <strong>{opinion.nombre}</strong> ({opinion.email}): {opinion.opinion}
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay opiniones guardadas aún.</p>
        )}
      </div>
    </div>
  );
}

export default EncuestaOpinion;
