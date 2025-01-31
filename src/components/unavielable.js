import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate instead of useHistory

const NotAvailable = () => {
  const navigate = useNavigate();  // Use useNavigate hook

  const goBackHome = () => {
    navigate('/');  // Navigate to the home page
  };

  const refreshPage = () => {
    window.location.reload();  // Refresh the page
  };

  return (
    <div className="not-available-container">
      <h1>Oops! Our page is not available right now.</h1>
      <p>Sorry, something went wrong. Please try again later.</p>
      <div className="button-container">
        <button onClick={refreshPage}>Refresh</button>
        <button onClick={goBackHome}>Go Back to Home</button>
      </div>
    </div>
  );
};

export default NotAvailable;
