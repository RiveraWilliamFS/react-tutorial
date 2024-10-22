import React from 'react';
import { useNavigate } from 'react-router-dom';
import charmander from '../images/charmander.png'; 
import './SettingsDesign.css';

function Settings() {
  const navigate = useNavigate();

  return (
    <div className="pokemon-container">
      <h1 className="pokemon-title">Here's Your Pokemon!</h1>
      <div className="pokemon-box">
        <img src={charmander} alt="Charmander" />
      </div>
      <button className="previous-btn" onClick={() => navigate(-1)}>
        Previous Page
      </button>
      <button className="all-pokemon-btn" onClick={() => navigate('/all')}>
        See All Pokemon
      </button>
    </div>
  );
}

export default Settings;
