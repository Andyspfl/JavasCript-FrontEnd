import React, { useState } from 'react';
import '../styles/home.css';

function Home() {
  const [imagen, setImagen] = useState(null);

  const handleFileChange = (event) => {
    setImagen(event.target.files[0]);
  };

  return (
    <div className="home">
      <h1>Bienvenido a Nuestra Tienda en Línea</h1>
      <p>Compra los mejores productos a los mejores precios.</p>
      <label>Imagen:</label>
      <input type="file" name="imagen" onChange={handleFileChange} />
      {imagen && (
        <img src={URL.createObjectURL(imagen)} alt="Imagen seleccionada" />
      )}
    </div>
  );
}

export default Home;
