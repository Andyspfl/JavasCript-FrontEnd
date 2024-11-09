import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [editTask, setEditTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  // Agregar tarea
  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask(""); // Limpiar campo de entrada
    }
  };

  // Eliminar tarea
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  // Editar tarea
  const startEdit = (index) => {
    setEditIndex(index);
    setEditTask(tasks[index]);
  };

  // Guardar cambios en la tarea editada
  const saveEdit = () => {
    if (editTask.trim()) {
      const newTasks = tasks.map((t, i) => (i === editIndex ? editTask : t));
      setTasks(newTasks);
      setEditTask("");
      setEditIndex(null);
    }
  };

  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      
      {/* Input para agregar tarea */}
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button onClick={addTask}>Agregar</button>

      {/* Lista de tareas */}
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={editTask}
                  onChange={(e) => setEditTask(e.target.value)}
                />
                <button onClick={saveEdit}>Guardar</button>
              </>
            ) : (
              <>
                {t}
                <button onClick={() => startEdit(index)}>Editar</button>
                <button onClick={() => deleteTask(index)}>Eliminar</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
