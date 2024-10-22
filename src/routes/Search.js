import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './SearchDesign.css';

function Search() {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedType = location.state?.selectedType || 'Type';

  const evolutions = ['First Evolution', 'Second Evolution', 'Final'];

  const handleNavigateToSettings = () => {
    navigate('/settings'); 
  };

  return (
    <div className="search-container">
      <h1 className="search-title">Choose Evolution for {selectedType}</h1>

      <div className="evolution-list">
        {evolutions.map((evolution, index) => (
          <div key={index} className="evolution-box" onClick={handleNavigateToSettings}>
            {evolution}
          </div>
        ))}
      </div>

      <button className="back-btn" onClick={() => navigate(-1)}>Previous Page</button>
    </div>
  );
}

export default Search;
