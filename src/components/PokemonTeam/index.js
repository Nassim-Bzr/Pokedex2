import React, { useState, useEffect } from "react";

// Assurez-vous de recevoir les props dans un objet
export default function PokemonTeam({ handleRemoveFromTeam }) {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const savedTeam = JSON.parse(localStorage.getItem("pokemonTeam")) || [];
    setTeam(savedTeam);
  }, []);
  useEffect(() => {
    const handleTeamChange = () => {
      const savedTeam = JSON.parse(localStorage.getItem("pokemonTeam")) || [];
      setTeam(savedTeam);
    };
  
    window.addEventListener("pokemonTeamChanged", handleTeamChange);
  
    // N'oubliez pas de nettoyer l'écouteur d'événements
    return () => {
      window.removeEventListener("pokemonTeamChanged", handleTeamChange);
    };
  }, []);
  
  return (
    <div>
      <h1>Ma liste de Pokémon</h1>
      <p>
        Vous pouvez ajouter des Pokémon à votre liste pour les retrouver plus
        facilement.
      </p>
      <div className="pokemon-team">
        {team.map((pokemon) => (
          <div key={pokemon.id} className="card-poke">
            <img src={pokemon.image} alt={pokemon.name} className="img-poke" />
            <h2>{pokemon.name}</h2>
            <h3>Stats</h3>
            <div className="caract">
              <div className="column">
                <p className="caract-text">HP</p>
                <span className="caract-value">{pokemon.stats.HP}</span>
                <br />
                <p className="caract-text">Attack</p>
                <span className="caract-value">{pokemon.stats.attack}</span>
                <br />
                <p className="caract-text">Defense</p>
                <span className="caract-value">{pokemon.stats.defense}</span>
                <br />
              </div>
              <div className="column">
                <p className="caract-text">Special Attack</p>
                <span className="caract-value">
                  {pokemon.stats.special_attack}
                </span>
                <br />
                <p className="caract-text">Special Defense</p>
                <span className="caract-value">
                  {pokemon.stats.special_defense}
                </span>
                <br />
                <p className="caract-text">Speed</p>
                <span className="caract-value">{pokemon.stats.speed}</span>
                <br />
              </div>
            </div>
            <div className="stats">
              <p className="types-title">Types</p>
              {pokemon.apiTypes.map((type) => (
                <img
                  key={type.name}
                  className="logo-stats"
                  src={type.image}
                  alt={type.name}
                />
              ))}

              <button
                className="add-button"
                onClick={() => handleRemoveFromTeam(pokemon.id)}
              >
                Retirer de l'équipe
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
