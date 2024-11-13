import React from 'react';
import style from './Logo.module.css'; // Asegúrate de tener el archivo de estilos correspondiente

function Logo() {
  return (
    <div className={style.logoContainer}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpB72uNCbIQqU94YMjuS4SGAKRDv5l3QSH9w&s"  // Asegúrate de poner la ruta correcta a tu logo
        alt="Logo"
        className={style.logo}
      />
    </div>
  );
}

export default Logo;
