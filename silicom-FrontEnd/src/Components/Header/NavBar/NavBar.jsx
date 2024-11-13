import React, { useState } from 'react';
import style from './NavBar.module.css';

function NavBar() {
  const [showCategories, setShowCategories] = useState(false);

  return (
    <div className={style.navBar}>
      <div 
        className={style.navBarCategories} 
        onMouseEnter={() => setShowCategories(true)} 
        onMouseLeave={() => setShowCategories(false)}
      >
        <button className={style.navButton}>Categorías</button>
        {showCategories && (
          <div className={style.dropdown}>
            <a href="/category/1" className={style.dropdownItem}>Categoría 1</a>
            <a href="/category/2" className={style.dropdownItem}>Categoría 2</a>
            <a href="/category/3" className={style.dropdownItem}>Categoría 3</a>
          </div>
        )}
      </div>

      <div className={style.navBarOptions}>
        <a href="/catalogo" className={style.navButton}>Catálogo</a>
        <a href="/novedades" className={style.navButton}>Novedades</a>
        <a href="/promociones" className={style.navButton}>Promociones</a>
        <a href="/contactenos" className={style.navButton}>Contáctenos</a>
        <a href="/acerca-de" className={style.navButton}>Acerca de</a>
      </div>
    </div>
  );
}

export default NavBar;
