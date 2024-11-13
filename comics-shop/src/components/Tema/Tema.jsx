import React, { useState } from 'react';

function Tema() {
  const [backgroundColor, setBackgroundColor] = useState('white');

  const handleBackgroundColorChange = (e) => {
    setBackgroundColor(e.target.value);
  };

  return (
    <div>
      <div className="cardChange" style={{ backgroundColor }}>
        Hola
      </div>

      <select onChange={handleBackgroundColorChange}>
        <option value="white">Cambiar color a blanco</option>
        <option value="black">Cambiar color a oscuro</option>
      </select>
    </div>
  );
}

export default Tema;
