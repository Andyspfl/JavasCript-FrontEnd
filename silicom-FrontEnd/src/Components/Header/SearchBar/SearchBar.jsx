import React, { useState } from 'react';
import style from './SearchBar.module.css'; // Asegúrate de importar el archivo de estilos

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState(''); // Estado para almacenar lo que escribe el usuario

  // Función que se ejecuta cuando el valor del input cambia
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Función que se ejecuta al hacer clic en el botón de búsqueda
  const handleSearchSubmit = () => {
    console.log('Buscando:', searchTerm);
    // Aquí podrías hacer una búsqueda real, redirigir a una página, etc.
  };

  return (
    <div className={style.searchBar}>
      <input
        type="text"
        value={searchTerm} // Aquí se usa el estado para controlar el valor
        onChange={handleSearchChange} // Actualiza el estado cuando el usuario escribe
        placeholder="Buscar..."
        className={style.searchInput}
      />
      <button onClick={handleSearchSubmit} className={style.searchButton}>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
          <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/>
        </svg>
      </button>
    </div>
  );
}

export default SearchBar;
