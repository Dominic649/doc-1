import React, { useState } from 'react';
import image1 from './images/profile.jpg';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [formVisible, setFormVisible] = useState(false);

  const toggleFormVisibility = () => setFormVisible(!formVisible);

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-image-container">
          <button className="profile-button profile-button-left" onClick={toggleFormVisibility}>
            Hire Me
          </button>
          <img src={image1} alt="Dominic Nambarawani" className="profile-image" />
          <a
            href="https://wa.me/1234567890" // Replace with your WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="profile-button profile-button-right"
          >
            Live Chat
          </a>
        </div>
        <h1 className="profile-name">Dominic Nambarawani</h1>
        <p className="profile-age">20 Years Old | Web Developer</p>
      </div>

      <div className="profile-bio">
        <p>
          Hey there! I’m Dominic Nambarawani, a passionate web developer and
          graphic designer from Zimbabwe. Being a website developer is my
          ultimate passion. My journey began at <strong>Madziwa High</strong>,
          where I completed my primary and secondary education. Later, I joined
          <strong> Learnio Academy</strong>, where I honed my programming skills
          and became proficient in technologies like HTML, CSS, JavaScript, and
          Node.js.
        </p>
        <p>
          Creativity and dedication drive me to craft stunning websites and
          digital designs that leave a lasting impression. Let’s work together
          and build something extraordinary!
        </p>
      </div>

      {formVisible && (
        <div className="hire-me-form-container">
          <h2>Hire Me</h2>
          <form className="hire-me-form">
            <label htmlFor="name">Full Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      )}

      <div className="profile-buttons">
        <a href="/skills" className="profile-nav-button">My Skills</a>
        <Link to="/education" className="profile-nav-button">My Education</Link>
      </div>
    </div>
  );
};

export default Profile;
