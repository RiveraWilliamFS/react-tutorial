import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AllPokemonDesign.css';

function AllPokemon() {
  const navigate = useNavigate();

  // Example of the Pokémon I've created
  const pokemonList = [
    {
      name: 'Squirtle',
      image: './images/squirtle.png',
    },
    {
      name: 'Charmander',
      image: './images/charmander.png',
    },
    {
      name: 'Venusaur',
      image: './images/venusaur.png',
    },
  ];

  return (
    <div className="all-pokemon-container">
      <h1 className="all-pokemon-title">Here are all of the Pokémon you've Created!</h1>
      <div className="pokemon-grid">
        {pokemonList.map((pokemon, index) => (
          <div key={index} className="pokemon-box">
            <img src={pokemon.image} alt={pokemon.name} className="pokemon-img" />
            <p>{pokemon.name}</p>
          </div>
        ))}
      </div>
      <button className="action-btn" onClick={() => navigate('/')}>Start Over</button>
      <button className="action-btn" onClick={() => navigate('/')}>Add More Pokémon</button>
    </div>
  );
}

export default AllPokemon;
