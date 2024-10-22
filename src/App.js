import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './routes/Dashboard';
import UserSettings from './routes/Settings';
import Search from './routes/Search';
import Details from './routes/Details';
import AllPokemon from './routes/AllPokemon';
import './routes/DetailsDesign.css';
import './routes/SettingsDesign.css'; 
import './routes/AllPokemonDesign.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/settings" element={<UserSettings />} />  {}
        <Route path="/search" element={<Search />} />
        <Route path="/details" element={<Details />} />
        <Route path="/all" element={<AllPokemon />} />
      </Routes>
    </Router>
  );
}

export default App;
