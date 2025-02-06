// src/components/UserActions/UserActions.js
import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import styles from './UserActions.module.css';

const UserActions = () => {
  return (
    <div className="hidden md:flex items-center space-x-6">
      <button className="text-gray-700 hover:text-blue-600">Iniciar Sesión</button>
      <button className="text-gray-700 hover:text-blue-600">
        <Heart size={24} />
      </button>
      <button className="text-gray-700 hover:text-blue-600">
        <ShoppingCart size={24} />
      </button>
    </div>
  );
};

export default UserActions;
