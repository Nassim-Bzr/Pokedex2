import "./App.css";

import PresentationPokedex from "./components/PresentationPokedex";
import PokemonStarters from "./components/PokemonStarters";
import PokemonSearch from "./components/PokemonSearch";
import PokemonList from "./components/PokemonList";
import PokemonTeam from "./components/PokemonTeam";
import { useState } from "react";


function App() {

  const [team, setTeam] = useState([]);
  const handleRemoveFromTeam = (pokemonId) => {
    const updatedTeam = team.filter(pokemon => pokemon.id !== pokemonId);
    setTeam(updatedTeam);
    localStorage.setItem('pokemonTeam', JSON.stringify(updatedTeam));
  };
 console.log(team)

 const handleAddToTeam = (pokemon) => {
  // Lire l'équipe actuelle du localStorage
  const currentTeam = JSON.parse(localStorage.getItem("pokemonTeam")) || [];

  // Ajouter le nouveau Pokémon à l'équipe, en vérifiant d'abord s'il est déjà présent
  if (!currentTeam.some((p) => p.id === pokemon.id)) {
    const newTeam = [...currentTeam, pokemon];
    console.log(newTeam)
    localStorage.setItem("pokemonTeam", JSON.stringify(newTeam));
  } else {
    alert("Ce Pokémon est déjà dans votre équipe !");
  }
};



  return (
    <div className="App">

  <PresentationPokedex handleRemoveFromTeam={handleRemoveFromTeam} handleAddToTeam={handleAddToTeam} />
      <PokemonStarters handleRemoveFromTeam={handleRemoveFromTeam} handleAddToTeam={handleAddToTeam}/> 
      <PokemonSearch handleRemoveFromTeam={handleRemoveFromTeam} handleAddToTeam={handleAddToTeam} />
      <PokemonTeam handleRemoveFromTeam={handleRemoveFromTeam} handleAddToTeam={handleAddToTeam}/>
      {/* <PokemonList />{} */}

    </div>
  );
}

export default App;
