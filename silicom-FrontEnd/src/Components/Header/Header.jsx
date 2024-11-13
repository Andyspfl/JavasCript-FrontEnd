import React from 'react';
import Logo from './Logo/Logo';
import NavBar from './NavBar/NavBar';
import SearchBar from './SearchBar/SearchBar';
import UserActions from './UserActions/UserActions';
import style from './Header.module.css'; // Asegúrate de tener el archivo de estilos correspondiente


function Header() {
    return (
      <header className={style.header}>
        <div className={style.topSection}>
            {/* Logo */}
            <Logo />
            {/* Barra de búsqueda */}
            <SearchBar />
            {/* Acciones de usuario */}
            <UserActions />
        </div>
        {/* Barra de navegación debajo del logo */}
        <NavBar />
      </header>
    );
  }

export default Header;
