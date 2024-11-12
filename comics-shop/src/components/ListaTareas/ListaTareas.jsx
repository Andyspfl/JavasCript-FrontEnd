import React from 'react'
import { useState } from 'react';

function ListaTareas() {
    const [tareas, setTareas] = useState([]);

    const agregar = (Tarea) => {
        setTareas([...tareas, Tarea])
    }
    const eliminar = () => {

    }
  return (
    <div>
      
    </div>
  )
}

export default ListaTareas
