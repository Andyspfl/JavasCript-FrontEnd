import React from 'react';
import ProductList from './Shop/ProductList';
import '../styles/shop.css';

function Shop() {
  return (
    <div className="shop">
      <h1>Shop</h1>
      <ProductList />
    </div>
  );
}

export default Shop;
