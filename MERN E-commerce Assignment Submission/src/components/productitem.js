import React from 'react';
import './productitem.css';

const ProductItem = ({ product }) => {
    return (
      <div className="product-item">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-details">
          <h2>{product.name}</h2>
          <div className="product-rating">
            {'★'.repeat(Math.floor(product.rating))}
            {'☆'.repeat(5 - Math.floor(product.rating))}
            <span className="rating-count">{product.rating}</span>
          </div>
          <p className="purchased-info">5K+ bought in past month</p>
          {product.availability ? (
            <button className="see-options">See options</button>
          ) : (
            <p className="unavailable">Currently unavailable.</p>
          )}
          <a href="#" className="colors-patterns">+5 colors/patterns</a>
        </div>
      </div>
    );
  };
  
  export default ProductItem;