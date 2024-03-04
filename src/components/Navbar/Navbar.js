import React from 'react';
import { Link } from 'react-router-dom';
import "../../App.css"

const Navbar = () => {
  return (
    <nav>
      <ul className='navbar'>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/starters">Starters</Link></li>
        <li><Link to="/search">Recherche</Link></li>
        <li><Link to="/team">Mon Équipe</Link></li>
        <li><Link to="/list">Liste des Pokémon</Link></li>
        {/* Ajoutez d'autres liens de navigation si nécessaire */}
      </ul>
    </nav>
  );
};

export default Navbar;
