import React from 'react';
import ProductItem from './productitem';
import './productitem.css';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductItem key={product.product_id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
