import "./App.css";
import { Routes, Route } from "react-router-dom";

import PresentationPokedex from "./components/PresentationPokedex";
import PokemonStarters from "./components/PokemonStarters";
import PokemonSearch from "./components/PokemonSearch";
import PokemonList from "./components/PokemonList";
import PokemonTeam from "./components/PokemonTeam";
import Navbar from "./components/Navbar/Navbar.js";

import { useState } from "react";

function App() {
  const [team, setTeam] = useState([]);
  const handleRemoveFromTeam = (pokemonId) => {
    const currentTeam = JSON.parse(localStorage.getItem("pokemonTeam")) || [];

    const updatedTeam = currentTeam.filter(
      (pokemon) => pokemon.id !== pokemonId
    );

    localStorage.setItem("pokemonTeam", JSON.stringify(updatedTeam));

    window.dispatchEvent(new CustomEvent("pokemonTeamChanged"));
  };

  const handleAddToTeam = (pokemon) => {
    const currentTeam = JSON.parse(localStorage.getItem("pokemonTeam")) || [];
    if (!currentTeam.some((p) => p.id === pokemon.id)) {
      const newTeam = [...currentTeam, pokemon];
      localStorage.setItem("pokemonTeam", JSON.stringify(newTeam));
      // Déclencher l'événement pour informer les composants abonnés de la mise à jour
      window.dispatchEvent(new CustomEvent("pokemonTeamChanged"));
    } else {
      alert("Ce Pokémon est déjà dans votre équipe !");
    }
  };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PresentationPokedex
              handleRemoveFromTeam={handleRemoveFromTeam}
              handleAddToTeam={handleAddToTeam}
            />
          }
        />
        <Route
          path="/starters"
          element={
            <PokemonStarters
              handleRemoveFromTeam={handleRemoveFromTeam}
              handleAddToTeam={handleAddToTeam}
            />
          }
        />
        <Route path="/search" element={<PokemonSearch />} />
        <Route
          path="/team"
          element={
            <PokemonSearch
              handleRemoveFromTeam={handleRemoveFromTeam}
              handleAddToTeam={handleAddToTeam}
            />
          }
        />
        <Route
          path="/list"
          element={
            <PokemonTeam
              handleRemoveFromTeam={handleRemoveFromTeam}
              handleAddToTeam={handleAddToTeam}
            />
          }
        />
      </Routes>

      {/*       <PokemonList /> */}
    </div>
  );
}

export default App;
