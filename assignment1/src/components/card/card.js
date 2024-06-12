import React from 'react';
import './card.css';

function Card({ image, title, description, price }) {
  return (
    <div className='card'>
      <img src={image} alt={title} className='card-image' />
      <div className='card-details'>
        <h3 className='card-title'>{title}</h3>
        <p className='card-description'>{description}</p>
        <p className='card-price'>{price}</p>
      </div>
    </div>
  );
}

export default Card;
