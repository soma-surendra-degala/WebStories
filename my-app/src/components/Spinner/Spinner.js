import React from 'react';
import '../Spinner/Spinner.css'; // Ensure you have the CSS for the spinner
import { ClimbingBoxLoader } from 'react-spinners'; // Import the spinner component

function Spinner() {
  return (
    <div className="spinner-overlay">
      <div className="spinner"><ClimbingBoxLoader /></div>
    </div>
  );
}

export default Spinner;
