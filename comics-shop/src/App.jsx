import { useState } from 'react'
import './App.css'
import ComicItem from './components/ComicItem/ComicItem'
import Button from './components/Button/Button'
import NavBar from './components/NavBar/NavBar'

function App() {
  // Definimos un estado para mostrar un mensaje
  const [message, setMessage] = useState('¡Hola, mundo!');

  // Función que cambia el mensaje cuando se hace clic en el botón
  const handleClick = () => {
    setMessage('¡Has hecho clic en el botón!');
  };

  return (
    <div className="App">
      <NavBar />
      <h1>{message}</h1>
      {/* Usamos el componente Button */}
      <Button onClick={handleClick}>Hacer clic</Button>
    </div>
  );
}

export default App
