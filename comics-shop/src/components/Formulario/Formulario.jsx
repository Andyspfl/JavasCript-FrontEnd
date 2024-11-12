import React from 'react'
import { useState } from 'react';

function Formulario() {
    const [nombre, setNombre] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Hola, ${nombre}`)
    };

    const handleChange = (e) => {
        setNombre(e.target.value)
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type="text"
        value={nombre}
        onChange={handleChange}
        placeholder='Escribe tu nombre' />
        <button type='submit'>Enviar</button>
    </form>
  )
}

export default Formulario
