import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import './App.css';
import Navbar from './components/Navbar'; // Import the Navbar component
import Home from './components/Home';
import Contacts from './components/Contacts'; // Fixed typo in 'Contacts'
import Skills from './components/Skills'; // Capitalized Skills for consistency
import Profile from './components/Profile';
import Projects from './components/Projects'; // Fixed typo in 'Projects'
import Hobbies from './components/Hobbies';
import Footer from './components/Footer';
import Services from './components/services';
import Education from './components/Education';
import NotAvailable from './components/unavielable'; // Import the NotAvailable component

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Hobbies" element={<Hobbies />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Education" element={<Education />} />
          <Route path="*" element={<NotAvailable />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
