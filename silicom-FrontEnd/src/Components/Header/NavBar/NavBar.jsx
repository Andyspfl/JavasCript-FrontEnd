// src/components/NavBar/NavBar.js
import React from 'react';
import styles from './NavBar.module.css';

const NavBar = ({ navItems }) => {
  return (
    <nav className={styles.navbar}>
      <ul className="flex space-x-8 py-4">
        {navItems.map((item) => (
          <li key={item.name}>
            <a href={item.href} className="text-gray-700 hover:text-blue-600">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
