import React from 'react';
import styles from './NavBar.module.css'; // Importa los estilos del CSS Module

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}> {/* Usa styles.navbarList */}
        <li className={styles.navbarItem}>Inicio</li> {/* Usa styles.navbarItem */}
        <li className={styles.navbarItem}>Acerca de</li>
        <li className={styles.navbarItem}>Servicios</li>
        <li className={styles.navbarItem}>Contacto</li>
      </ul>
    </nav>
  );
}

export default NavBar;
