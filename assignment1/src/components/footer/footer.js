import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Get to Know Us</h3>
          <p>About Us</p>
          <p>Careers</p>
          <p>Press Releases</p>
          <p>Amazon Cares</p>
         
        </div>
        <div className="footer-section">
          <h3>Make Money with Us</h3>
          <p>Sell products on Amazon</p>
          <p>Sell apps on Amazon</p>
          <p>Become an Affiliate</p>
          <p>Advertise Your Products</p>
         
        </div>
        <div className="footer-section">
          <h3>Amazon Payment Products</h3>
          <p>Amazon Business Card</p>
          <p>Shop with Points</p>
          <p>Reload Your Balance</p>
          <p>Amazon Currency Converter</p>
          
        </div>
        <div className="footer-section">
          <h3>Let Us Help You</h3>
          <p>Your Account</p>
          <p>Your Orders</p>
          <p>Shipping Rates & Policies</p>
          <p>Returns & Replacements</p>
          
        </div>
      </div>
      <div className="footer-bottom">
        <p>Conditions of Use</p>
        <p>Privacy Notice</p>
        <p>Interest-Based Ads</p>
        <p>&copy; 2024, Amazon.com, Inc. or its affiliates</p>
      </div>
    </footer>
  );
}

export default Footer;
