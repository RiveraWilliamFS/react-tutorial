import React from 'react';
import { useNavigate } from 'react-router-dom';
import grass from '../images/grass.png'; 
import fire from '../images/fire.png';
import water from '../images/waterdrop.png';
import './DetailsDesign.css';

function Details() {
  const navigate = useNavigate();

  const handleTypeClick = (type) => {
    navigate('/search', { state: { selectedType: type } });
  };

  return (
    <div className="details-container">
      <h1 className="details-title">First Choose Your Type</h1>
      <div className="type-options">
        <div className="type-box" onClick={() => handleTypeClick('Grass')}>
          <img src={grass} alt="Grass" />
          <p>Grass</p>
        </div>
        <div className="type-box" onClick={() => handleTypeClick('Fire')}>
          <img src={fire} alt="Fire" />
          <p>Fire</p>
        </div>
        <div className="type-box" onClick={() => handleTypeClick('Water')}>
          <img src={water} alt="Water" />
          <p>Water</p>
        </div>
      </div>
      <button className="back-btn" onClick={() => navigate(-1)}>Previous Page</button>
    </div>
  );
}

export default Details;


