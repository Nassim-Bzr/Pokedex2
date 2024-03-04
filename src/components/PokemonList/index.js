import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function PokemonList({ addPokemonToTeam }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://pokebuildapi.fr/api/v1/pokemon"
        );
        setData(response.data);
      } catch (error) {
        console.error("There was an error fetching the Pokemon data:", error);
      }
    };
    getData();
  }, []);

  const handleAddToTeam = (pokemon) => {
    const currentTeam = JSON.parse(localStorage.getItem("pokemonTeam")) || [];

    if (!currentTeam.some((p) => p.id === pokemon.id)) {
      const newTeam = [...currentTeam, pokemon];
      localStorage.setItem("pokemonTeam", JSON.stringify(newTeam));
      
window.dispatchEvent(new CustomEvent("pokemonTeamChanged"));

    } else {
      alert("Ce Pokémon est déjà dans votre équipe !");
    }
  };
  return (
    <div>
      <h1>Pokemon List</h1>
      {data.length > 0 ? (
        <ul className="ul-poke">
          {data.map((pokemon) => (
            <div key={pokemon.id} className="card-poke">
              <img
                src={pokemon.image}
                alt={pokemon.name}
                className="img-poke"
              />
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
                <button className="add-button" onClick={addPokemonToTeam}>
                  Ajouter à l'équipe
                </button>
               
              </div>
            </div>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
