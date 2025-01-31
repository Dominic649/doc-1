import React from 'react';
import { Link } from 'react-router-dom';
import Profile from './images/profile.jpg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img src={Profile} alt="Dominic's Logo" className="navbar-logo-image" />
        </Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>

          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/hobbies">Hobbies</Link>
        </li>
        <li>
          <Link to="/footer">Footer</Link>
        </li>
        <li></li>
      </ul>
    </nav>
  );
};

export default Navbar;
