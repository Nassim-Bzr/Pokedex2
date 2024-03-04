import React from 'react'
import "../../App.css"

export default function PresentationPokedex() {
  return (
    <div>
        
        <h1 className="title">Pokedex</h1>
      <p className="description">
        Découvrez le monde fascinant des Pokémon avec notre Pokédex ultime! Que
        vous soyez un Maître Pokémon en devenir ou simplement curieux de
        découvrir chaque créature unique, notre base de données complète est
        votre porte d'entrée vers une aventure extraordinaire. Explorez les
        caractéristiques, les forces, et les faiblesses de chaque Pokémon,
        plongez dans leur univers, et devenez l'expert ultime.
      </p>

      <p className="description-2">
        Recherche Instantanée par Nom: Ne perdez plus jamais de temps à chercher
        votre Pokémon préféré. Entrez simplement son nom pour accéder
        instantanément à une mine d'informations. Fiches Détaillées: Chaque
        Pokémon est unique, et notre Pokedex célèbre cette diversité. Toujours
        Plus à Découvrir: Nous nous engageons à enrichir constamment le Pokedex
        avec de nouvelles fonctionnalités passionnantes. Restez à l'affût!
      </p>
      <p className="text-news"> Inscrivez-vous à notre Newsletter!</p>
      <label className="label-input">
        Email :<input />
        <button>S'inscrire</button>
      </label>
    </div>
  )
}
