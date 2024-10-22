import React from 'react';
import { useNavigate } from 'react-router-dom';
import pikachu from '../images/pikachu.png'; 
import './DashboardDesign.css'; 

function Dashboard() {
    const navigate = useNavigate();

    const handleGenerateClick = () => {
        navigate('/details'); 
    };

    return (
        <div className="dashboard-container">
            <h1 className="welcome-title">Welcome To The Random Pokemon Generator</h1>
            <div className="generator-box">
                <button className="generate-btn" onClick={handleGenerateClick}>Generate</button>
                <img src={pikachu} alt="Pikachu" className="pikachu-img" /> {}
                <p className="generate-text">To begin click Generate and we'll get started!</p>
            </div>
        </div>
    );
}

export default Dashboard;



