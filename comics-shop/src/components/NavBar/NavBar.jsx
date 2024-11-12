import React from 'react';
import styles from './NavBar.module.css'; // Importa los estilos del CSS Module
import Button from '../Button/Button'; // Importa el componente Button

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <Button>Inicio</Button>
      <Button>Acerca de</Button>
      <Button>Contactanos</Button>
      <Button>Catalogo</Button>
    </nav>
  );
}

export default NavBar;
