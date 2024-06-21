import React from "react";
import "../../styles/product-card.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      
    </div>
  );
}

export default ProductCard;
