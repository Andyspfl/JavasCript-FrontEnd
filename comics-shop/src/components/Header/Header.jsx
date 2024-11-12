import React from 'react'
import NavBar from '../NavBar/NavBar'
import style from './Header.module.css'

function Header() {
  return (
    <header className={style.header}>
      {/* Contenedor de la fila superior */}
      <div className={style.topRow}>
        {/* Logo de la app */}
        <div className={style.headerLogo}>
          <img src="https://i.ytimg.com/vi/KncXSdlBnh0/hqdefault.jpg" alt="Logo de la aplicación" className={style.logo} />
        </div>

        {/* Barra de búsqueda con ícono */}
        <div className={style.searchBar}>
          <input type="text" placeholder="Buscar..." className={style.searchInput} />
          {/* Ícono de búsqueda en formato SVG */}
          <span className={style.searchIcon}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="16.5" y1="16.5" x2="22" y2="22"></line>
            </svg>
          </span>
        </div>

        

        {/* Información de usuario */}
        <div className={style.headerUser}>
          <p className={style.login}>Mis Favoritos</p>
          <p className={style.login}>Iniciar sesión</p>
          {/* Icono de carrito */}
          <div className={style.cartIcon}>
            <span>🛒</span>
          </div>
        </div>
      </div>

      {/* Barra de navegación debajo */}
      <NavBar />
    </header>
  )
}

export default Header
