import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>ONLINE SHOPPING</h4>
        <ul>
          <li><a href="/">Men</a></li>
          <li><a href="/">Women</a></li>
          <li><a href="/">Kids</a></li>
          <li><a href="/">Home & Living</a></li>
          <li><a href="/">Beauty</a></li>
          <li><a href="/">Gift Cards</a></li>
          <li><a href="/">Myntra Insider</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>CUSTOMER POLICIES</h4>
        <ul>
          <li><a href="/">Contact Us</a></li>
          <li><a href="/">FAQ</a></li>
          <li><a href="/">T&C</a></li>
          <li><a href="/">Terms Of Use</a></li>
          <li><a href="/">Track Orders</a></li>
          <li><a href="/">Shipping</a></li>
          <li><a href="/">Cancellation</a></li>
          <li><a href="/">Returns</a></li>
          <li><a href="/">Privacy Policy</a></li>
          <li><a href="/">Grievance Officer</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>EXPERIENCE MYNTRA APP ON MOBILE</h4>
        <div className="app-icons">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png" alt="Google Play Store" />
          <img src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-example-preferred_2x.png" alt="Apple App Store" />
        </div>
      </div>
      <div className="footer-section">
        <h4>KEEP IN TOUCH</h4>
        <div className="social-icons">
          <a href="https://www.facebook.com/myntra" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com/myntra" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://www.youtube.com/user/myntradotcom" target="_blank" rel="noopener noreferrer">YouTube</a>
          <a href="https://www.instagram.com/myntra" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
