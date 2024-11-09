// src/components/Button.js
import React from 'react';
import './Button.module.css'; // Importamos los estilos CSS

function Button({ onClick, children }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
