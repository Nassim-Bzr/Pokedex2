import React, { useEffect, useState } from "react";



import axios from "axios";

export default function PokemonSearch({handleAddToTeam}) {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

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

  const handleSearch = () => {
    if (!searchTerm) {
      setSearchResults([]);
      return;
    }
    const filteredPokemons = data.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredPokemons);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSearchClick = () => {
    if (!searchTerm) {
      setSearchResults([]);
      return;
    }

    const filteredPokemons = data.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredPokemons);
  };

  return (
    <div>
      <input
        placeholder="Search for a pokemon"
        value={searchTerm}
        onChange={handleSearchChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearchClick}>Search</button>
      {searchResults.length > 0 ? (
        <ul className="pokemon-search">
          {searchResults.map((pokemon) => (
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
                <button className="add-button" onClick={()=>{handleAddToTeam(pokemon)}}>
                  Ajouter à l'équipe
                </button>
              </div>
            </div>
          ))}
        </ul>
      ) : (
        <h1>Pas de recherche en cours.</h1>
      )}
    </div>
  );
}
