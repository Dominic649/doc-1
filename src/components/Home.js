import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom



const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Dominic's Portfolio</h1>
      <p>Your one-stop destination for creativity, innovation, and expertise.</p>
      
      <div className="home-links">
        <Link to="/services" className="home-link">
          🌟 Explore My Services
        </Link>
        <Link to="/contacts" className="home-link">
          📞 Chat with Me
        </Link>
        <Link to="/profile" className="home-link">
          🧑‍💻 View My Profile
        </Link>
        <Link to="/projects" className="home-link">
          🚀 Check Out My Projects
        </Link>
        <Link to="/skills" className="home-link">
          🎯 Discover My Skills
        </Link>
        <Link to="/hobbies" className="home-link">
          🏀 Dive Into My Hobbies
        </Link>
      </div>
    </div>
  );
};


export default Home;
