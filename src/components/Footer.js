import React from 'react';
import { FaFacebook, FaInstagram, FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import logo from './images/logo1.png';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-logo">
      <img src={logo} alt="Elite Logo" className="footer-logo-image" />
        <p className="footer-logo-text">Elite Creative Agency</p>
      </div>

      <div className="footer-links">
        <h3 className="footer-heading">
          <span className="moving-text">Connect with Me</span>
        </h3>
        <div className="footer-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="footer-icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="footer-icon" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className="footer-icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="footer-icon" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="footer-icon" />
          </a>
        </div>
      </div>

      <div className="footer-credit">
        <p>
          Made with <span className="heart">♥</span> by Dominic Nambarawani
        </p>
      </div>
    </footer>
  );
};

export default Footer;
