// src/components/Header/Header.js
import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import NavBar from '../NavBar/NavBar';
import SearchBar from '../SearchBar/SearchBar';
import UserActions from '../UserActions/UserActions';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Productos', href: '/productos' },
    { name: 'Categorías', href: '/categorias' },
    { name: 'Ofertas', href: '/ofertas' },
    { name: 'Contacto', href: '/contacto' },
  ];

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo />

          {/* Barra de búsqueda - visible en desktop */}
          <div className="hidden md:block flex-1 mx-8">
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          </div>

          {/* Iconos de usuario - visible en desktop */}
          <UserActions />
          
          {/* Botón de menú móvil */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Navegación Desktop */}
        <NavBar navItems={navItems} />
      </div>

      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-4 py-2">
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          </div>
          <NavBar navItems={navItems} />
          <div className="px-4 py-2 border-t border-gray-200">
            <ul className="space-y-2">
              <li>
                <a href="/login" className="block py-2 text-gray-700 hover:text-blue-600">
                  Iniciar Sesión
                </a>
              </li>
              <li>
                <a href="/favoritos" className="block py-2 text-gray-700 hover:text-blue-600">
                  Mis Favoritos
                </a>
              </li>
              <li>
                <a href="/carrito" className="block py-2 text-gray-700 hover:text-blue-600">
                  Carrito de Compras
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
