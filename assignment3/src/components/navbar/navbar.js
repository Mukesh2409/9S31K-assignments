import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="https://images.indianexpress.com/2021/01/myntra.png" alt="Myntra Logo" />
      </div>
      <ul className="navbar-links">
        <li><a href="/">Men</a></li>
        <li><a href="/">Women</a></li>
        <li><a href="/">Kids</a></li>
        <li><a href="/">Home & Living</a></li>
        <li><a href="/">Beauty</a></li>
        <li><a href="/">Studio</a></li>
      </ul>
      <div className="navbar-search">
        <input type="text" placeholder="Search for products, brands and more" />
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <div className="navbar-icons">
        <FontAwesomeIcon icon={faUser} />
        <FontAwesomeIcon icon={faHeart} />
        <FontAwesomeIcon icon={faShoppingBag} />
      </div>
    </nav>
  );
}

export default Navbar;
