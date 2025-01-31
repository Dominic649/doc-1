import React from 'react';
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaFacebook, FaTiktok, FaInstagram, FaTelegram, FaGithub } from 'react-icons/fa';

const Contacts = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-description">Feel free to reach out through any of the following channels:</p>
      <div className="contact-list">
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <span>Phone: 0716708732</span>
        </div>
        <div className="contact-item">
          <a
            href="https://wa.me/263716708732?text=Hi!%20I%20would%20like%20to%20connect%20with%20you."
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="contact-icon" />
            <span>WhatsApp: +263 716708732</span>
          </a>
        </div>
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <span>Email: <a href="mailto:dnambarawani@gmail.com">dnambarawani@gmail.com</a></span>
        </div>
        <div className="contact-item">
          <FaFacebook className="contact-icon" />
          <span>Facebook: <a href="https://www.facebook.com/DominicNambarawani" target="_blank" rel="noopener noreferrer">Dominic Nambarawani</a></span>
        </div>
        <div className="contact-item">
          <FaFacebook className="contact-icon" />
          <span>Facebook Group: <a href="https://www.facebook.com/groups/elitecreativeagency" target="_blank" rel="noopener noreferrer">Elite Creative Agency</a></span>
        </div>
        <div className="contact-item">
          <FaTiktok className="contact-icon" />
          <span>TikTok: @flamelilly60</span>
        </div>
        <div className="contact-item">
          <FaInstagram className="contact-icon" />
          <span>Instagram: <a href="https://www.instagram.com/DominicNambarawani" target="_blank" rel="noopener noreferrer">Dominic Nambarawani</a></span>
        </div>
        <div className="contact-item">
          <FaTelegram className="contact-icon" />
          <span>Telegram: Dominic Abelo</span>
        </div>
        <div className="contact-item">
          <FaGithub className="contact-icon" />
          <span>GitHub: <a href="https://github.com/dominic649" target="_blank" rel="noopener noreferrer">dominic649</a></span>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
