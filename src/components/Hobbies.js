import React from 'react';
import NBA from './images/nba.jpg';
import Play from './images/play.jpg';
import Art from './images/3d.jpg';
import Design from './images/real.jpg';

const Hobbies = () => {
  return (
    <div className="hobbies-container">
      <h1 className="hobbies-title">My Hobbies</h1>
      <p className="hobbies-intro">Exploring creativity, passion, and energy through my hobbies.</p>

      <div className="hobbies-gallery">
        <div className="hobby-item">
          <img src={Art} alt="3D Art" className="hobby-image" />
          <p className="hobby-text">Creating intricate and realistic 3D art that brings imagination to life.</p>
          <p className="hobby-quote">"Art is not what you see, but what you make others see." - Edgar Degas</p>
        </div>

        <div className="hobby-item">
          <img src={Design} alt="Realistic Designing" className="hobby-image" />
          <p className="hobby-text">Designing realistic visuals that capture the essence of creativity.</p>
          <p className="hobby-quote">"Design is intelligence made visible." - Alina Wheeler</p>
        </div>

        <div className="hobby-item">
          <img src={Play} alt="Playing Basketball" className="hobby-image" />
          <p className="hobby-text">Spending time on the court, improving skills, and enjoying the game.</p>
          <p className="hobby-quote">"Hard work beats talent when talent doesn’t work hard." - Tim Notke</p>
        </div>

        <div className="hobby-item">
          <img src={NBA} alt="Watching NBA Matches" className="hobby-image" />
          <p className="hobby-text">Enjoying thrilling NBA matches and analyzing the best plays.</p>
          <p className="hobby-quote">"Great players are willing to give up their own personal achievement for the achievement of the group." - Kareem Abdul-Jabbar</p>
        </div>
      </div>

      <div className="hobbies-footer">
        <button className="hobby-button" onClick={() => window.location.href='/projects'}>Check Out My Projects</button>
        <button className="hobby-button" onClick={() => window.location.href='/skills'}>Discover My Skills</button>
      </div>
    </div>
  );
};

export default Hobbies;
