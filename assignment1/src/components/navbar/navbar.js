import React from 'react';
import logo from '../images/logo.png';
import './navbar.css';

function Navbar() {
  return (
    <div className='navbar-container'>
      <div className='navbar-left'>
        <img src={logo} alt="logo" className='logo'/>
        <p className='location'>Update location</p>
      </div>
      <div className='navbar-middle'>
        <input type='text' placeholder='Search in Amazon' className='search-bar'/>
      </div>
      <div className='navbar-right'>
        <p>Hello, Sign in</p>
        <p>Returns & Orders</p>
        <p>Cart</p>
      </div>
    </div>
  );
}

export default Navbar;
