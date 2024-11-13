import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Formulario from './components/Formulario/Formulario';
import Registro from './components/Registro/Registro';
import Contador from './components/Contador/Contador';
import ContadorPalabras from './components/ContadorPalabras/ContadorPalabras';
import Tema from './components/Tema/Tema';
import Carrusel from './components/Carrusel/Carrusel';
import EncuestaOpnion from './components/EncuestaOpiniones/EncuestaOpinion';
import FormAvanzado from './components/FormAvanzado/FormAvanzado';

function App() {
  const comic = {
    imageUrl: 'https://i.pinimg.com/736x/88/1b/6d/881b6d3a4f84d72296ada537c611c582.jpg', // URL de la imagen del cómic
    title: 'Spider-Man: Into the Spider-Verse',
    description: 'Un cómic épico que sigue las aventuras de Spider-Man en múltiples dimensiones.',
    price: 12.99
  };

  const [contador, setContador] = useState(0);

  const incrementar = () => setContador(contador + 1);
  const decrementar = () => setContador(contador - 1)

  return (
    <div className="App">
      
      <Header />
      <h3>Ahora veremos mas sobre como utilizar los eventos como `useState`</h3>
      <h3>Contador: {contador}</h3>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>

      <Formulario />
      <Registro></Registro>
      <Contador></Contador>
      <ContadorPalabras></ContadorPalabras>
      <Tema></Tema>
      <Carrusel></Carrusel>
      <EncuestaOpnion></EncuestaOpnion>
      <FormAvanzado></FormAvanzado>
    </div>
  );
}

export default App
