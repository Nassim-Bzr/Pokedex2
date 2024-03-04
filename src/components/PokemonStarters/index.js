import React from "react";

export default function PokemonStarters({handleRemoveFromTeam}){
  const generations = [
    {
      generation: "rouge et bleu",
      pokemons: [
        {
          id: 1,
          pokedexId: 1,
          name: "Bulbizarre",
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
          sprite:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
          slug: "Bulbizarre",
          stats: {
            HP: 45,
            attack: 49,
            defense: 49,
            special_attack: 65,
            special_defense: 65,
            speed: 45,
          },
          apiTypes: [
            {
              name: "Poison",
              image:
                "https://static.wikia.nocookie.net/pokemongo/images/0/05/Poison.png",
            },
            {
              name: "Plante",
              image:
                "https://static.wikia.nocookie.net/pokemongo/images/c/c5/Grass.png",
            },
          ],
          apiGeneration: 1,
          apiResistances: [
            {
              name: "Normal",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Combat",
              damage_multiplier: 0.5,
              damage_relation: "resistant",
            },
            {
              name: "Vol",
              damage_multiplier: 2,
              damage_relation: "vulnerable",
            },
            {
              name: "Poison",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Sol",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Roche",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Insecte",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Spectre",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Acier",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Feu",
              damage_multiplier: 2,
              damage_relation: "vulnerable",
            },
            {
              name: "Eau",
              damage_multiplier: 0.5,
              damage_relation: "resistant",
            },
            {
              name: "Plante",
              damage_multiplier: 0.25,
              damage_relation: "twice_resistant",
            },
            {
              name: "Électrik",
              damage_multiplier: 0.5,
              damage_relation: "resistant",
            },
            {
              name: "Psy",
              damage_multiplier: 2,
              damage_relation: "vulnerable",
            },
            {
              name: "Glace",
              damage_multiplier: 2,
              damage_relation: "vulnerable",
            },
            {
              name: "Dragon",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Ténèbres",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Fée",
              damage_multiplier: 0.5,
              damage_relation: "resistant",
            },
          ],
          resistanceModifyingAbilitiesForApi: [],
          apiEvolutions: [
            {
              name: "Herbizarre",
              pokedexId: 2,
            },
          ],
          apiPreEvolution: "none",
          apiResistancesWithAbilities: [],
        },
        {
          id: 4,
          pokedexId: 4,
          name: "Salamèche",
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
          sprite:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
          slug: "Salameche",
          stats: {
            HP: 39,
            attack: 52,
            defense: 43,
            special_attack: 60,
            special_defense: 50,
            speed: 65,
          },
          apiTypes: [
            {
              name: "Feu",
              image:
                "https://static.wikia.nocookie.net/pokemongo/images/3/30/Fire.png",
            },
          ],
          apiGeneration: 1,
          apiResistances: [
            {
              name: "Normal",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Combat",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Vol",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Poison",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Sol",
              damage_multiplier: 2,
              damage_relation: "vulnerable",
            },
            {
              name: "Roche",
              damage_multiplier: 2,
              damage_relation: "vulnerable",
            },
            {
              name: "Insecte",
              damage_multiplier: 0.5,
              damage_relation: "resistant",
            },
            {
              name: "Spectre",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Acier",
              damage_multiplier: 0.5,
              damage_relation: "resistant",
            },
            {
              name: "Feu",
              damage_multiplier: 0.5,
              damage_relation: "resistant",
            },
            {
              name: "Eau",
              damage_multiplier: 2,
              damage_relation: "vulnerable",
            },
            {
              name: "Plante",
              damage_multiplier: 0.5,
              damage_relation: "resistant",
            },
            {
              name: "Électrik",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Psy",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Glace",
              damage_multiplier: 0.5,
              damage_relation: "resistant",
            },
            {
              name: "Dragon",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Ténèbres",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Fée",
              damage_multiplier: 0.5,
              damage_relation: "resistant",
            },
          ],
          resistanceModifyingAbilitiesForApi: [],
          apiEvolutions: [
            {
              name: "Reptincel",
              pokedexId: 5,
            },
          ],
          apiPreEvolution: "none",
          apiResistancesWithAbilities: [],
        },
        {
          id: 7,
          pokedexId: 7,
          name: "Carapuce",
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
          sprite:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
          slug: "Carapuce",
          stats: {
            HP: 44,
            attack: 48,
            defense: 65,
            special_attack: 50,
            special_defense: 64,
            speed: 43,
          },
          apiTypes: [
            {
              name: "Eau",
              image:
                "https://static.wikia.nocookie.net/pokemongo/images/9/9d/Water.png",
            },
          ],
          apiGeneration: 1,
          apiResistances: [
            {
              name: "Normal",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Combat",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Vol",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Poison",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Sol",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Roche",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Insecte",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Spectre",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Acier",
              damage_multiplier: 0.5,
              damage_relation: "resistant",
            },
            {
              name: "Feu",
              damage_multiplier: 0.5,
              damage_relation: "resistant",
            },
            {
              name: "Eau",
              damage_multiplier: 0.5,
              damage_relation: "resistant",
            },
            {
              name: "Plante",
              damage_multiplier: 2,
              damage_relation: "vulnerable",
            },
            {
              name: "Électrik",
              damage_multiplier: 2,
              damage_relation: "vulnerable",
            },
            {
              name: "Psy",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Glace",
              damage_multiplier: 0.5,
              damage_relation: "resistant",
            },
            {
              name: "Dragon",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Ténèbres",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Fée",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
          ],
          resistanceModifyingAbilitiesForApi: [],
          apiEvolutions: [
            {
              name: "Carabaffe",
              pokedexId: 8,
            },
          ],
          apiPreEvolution: "none",
          apiResistancesWithAbilities: [],
        },
      ],
    },
    {
      generation: "or et argent",
      pokemons: [
        {
          id: 152,
          pokedexId: 152,
          name: "Germignon",
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/152.png",
          sprite:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png",
          slug: "Germignon",
          stats: {
            HP: 45,
            attack: 49,
            defense: 65,
            special_attack: 49,
            special_defense: 65,
            speed: 45,
          },
          apiTypes: [
            {
              name: "Plante",
              image:
                "https://static.wikia.nocookie.net/pokemongo/images/c/c5/Grass.png",
            },
          ],
          apiGeneration: 2,
          apiResistances: [
            {
              name: "Normal",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Combat",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Vol",
              damage_multiplier: 2,
              damage_relation: "vulnerable",
            },
            {
              name: "Poison",
              damage_multiplier: 2,
              damage_relation: "vulnerable",
            },
            {
              name: "Sol",
              damage_multiplier: 0.5,
              damage_relation: "resistant",
            },
            {
              name: "Roche",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Insecte",
              damage_multiplier: 2,
              damage_relation: "vulnerable",
            },
            {
              name: "Spectre",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Acier",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Feu",
              damage_multiplier: 2,
              damage_relation: "vulnerable",
            },
            {
              name: "Eau",
              damage_multiplier: 0.5,
              damage_relation: "resistant",
            },
            {
              name: "Plante",
              damage_multiplier: 0.5,
              damage_relation: "resistant",
            },
            {
              name: "Électrik",
              damage_multiplier: 0.5,
              damage_relation: "resistant",
            },
            {
              name: "Psy",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Glace",
              damage_multiplier: 2,
              damage_relation: "vulnerable",
            },
            {
              name: "Dragon",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Ténèbres",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Fée",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
          ],
          resistanceModifyingAbilitiesForApi: [],
          apiEvolutions: [
            {
              name: "Macronium",
              pokedexId: 153,
            },
          ],
          apiPreEvolution: "none",
          apiResistancesWithAbilities: [],
        },
        {
          id: 155,
          pokedexId: 155,
          name: "Héricendre",
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/155.png",
          sprite:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png",
          slug: "Hericendre",
          stats: {
            HP: 39,
            attack: 52,
            defense: 43,
            special_attack: 60,
            special_defense: 50,
            speed: 65,
          },
          apiTypes: [
            {
              name: "Feu",
              image:
                "https://static.wikia.nocookie.net/pokemongo/images/3/30/Fire.png",
            },
          ],
          apiGeneration: 2,
          apiResistances: [
            {
              name: "Normal",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Combat",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Vol",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Poison",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Sol",
              damage_multiplier: 2,
              damage_relation: "vulnerable",
            },
            {
              name: "Roche",
              damage_multiplier: 2,
              damage_relation: "vulnerable",
            },
            {
              name: "Insecte",
              damage_multiplier: 0.5,
              damage_relation: "resistant",
            },
            {
              name: "Spectre",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Acier",
              damage_multiplier: 0.5,
              damage_relation: "resistant",
            },
            {
              name: "Feu",
              damage_multiplier: 0.5,
              damage_relation: "resistant",
            },
            {
              name: "Eau",
              damage_multiplier: 2,
              damage_relation: "vulnerable",
            },
            {
              name: "Plante",
              damage_multiplier: 0.5,
              damage_relation: "resistant",
            },
            {
              name: "Électrik",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Psy",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Glace",
              damage_multiplier: 0.5,
              damage_relation: "resistant",
            },
            {
              name: "Dragon",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Ténèbres",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Fée",
              damage_multiplier: 0.5,
              damage_relation: "resistant",
            },
          ],
          resistanceModifyingAbilitiesForApi: {
            name: "Torche",
            slug: "Torche",
          },
          apiEvolutions: [
            {
              name: "Feurisson",
              pokedexId: 156,
            },
          ],
          apiPreEvolution: "none",
          apiResistancesWithAbilities: [],
        },
        {
          id: 158,
          pokedexId: 158,
          name: "Kaiminus",
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/158.png",
          sprite:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png",
          slug: "Kaiminus",
          stats: {
            HP: 50,
            attack: 65,
            defense: 64,
            special_attack: 44,
            special_defense: 48,
            speed: 43,
          },
          apiTypes: [
            {
              name: "Eau",
              image:
                "https://static.wikia.nocookie.net/pokemongo/images/9/9d/Water.png",
            },
          ],
          apiGeneration: 2,
          apiResistances: [
            {
              name: "Normal",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Combat",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Vol",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Poison",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Sol",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Roche",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Insecte",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Spectre",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Acier",
              damage_multiplier: 0.5,
              damage_relation: "resistant",
            },
            {
              name: "Feu",
              damage_multiplier: 0.5,
              damage_relation: "resistant",
            },
            {
              name: "Eau",
              damage_multiplier: 0.5,
              damage_relation: "resistant",
            },
            {
              name: "Plante",
              damage_multiplier: 2,
              damage_relation: "vulnerable",
            },
            {
              name: "Électrik",
              damage_multiplier: 2,
              damage_relation: "vulnerable",
            },
            {
              name: "Psy",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Glace",
              damage_multiplier: 0.5,
              damage_relation: "resistant",
            },
            {
              name: "Dragon",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Ténèbres",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Fée",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
          ],
          resistanceModifyingAbilitiesForApi: [],
          apiEvolutions: [
            {
              name: "Crocrodil",
              pokedexId: 159,
            },
          ],
          apiPreEvolution: "none",
          apiResistancesWithAbilities: [],
        },
      ],
    },
    {
      generation: "rubis et saphir",
      pokemons: [
        {
          id: 252,
          pokedexId: 252,
          name: "Arcko",
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/252.png",
          sprite:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/252.png",
          slug: "Arcko",
          stats: {
            HP: 40,
            attack: 45,
            defense: 35,
            special_attack: 65,
            special_defense: 55,
            speed: 70,
          },
          apiTypes: [
            {
              name: "Plante",
              image:
                "https://static.wikia.nocookie.net/pokemongo/images/c/c5/Grass.png",
            },
          ],
          apiGeneration: 3,
          apiResistances: [
            {
              name: "Normal",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Combat",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Vol",
              damage_multiplier: 2,
              damage_relation: "vulnerable",
            },
            {
              name: "Poison",
              damage_multiplier: 2,
              damage_relation: "vulnerable",
            },
            {
              name: "Sol",
              damage_multiplier: 0.5,
              damage_relation: "resistant",
            },
            {
              name: "Roche",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Insecte",
              damage_multiplier: 2,
              damage_relation: "vulnerable",
            },
            {
              name: "Spectre",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Acier",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Feu",
              damage_multiplier: 2,
              damage_relation: "vulnerable",
            },
            {
              name: "Eau",
              damage_multiplier: 0.5,
              damage_relation: "resistant",
            },
            {
              name: "Plante",
              damage_multiplier: 0.5,
              damage_relation: "resistant",
            },
            {
              name: "Électrik",
              damage_multiplier: 0.5,
              damage_relation: "resistant",
            },
            {
              name: "Psy",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Glace",
              damage_multiplier: 2,
              damage_relation: "vulnerable",
            },
            {
              name: "Dragon",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Ténèbres",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Fée",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
          ],
          resistanceModifyingAbilitiesForApi: [],
          apiEvolutions: [
            {
              name: "Massko",
              pokedexId: 253,
            },
          ],
          apiPreEvolution: "none",
          apiResistancesWithAbilities: [],
        },
        {
          id: 255,
          pokedexId: 255,
          name: "Poussifeu",
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/255.png",
          sprite:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/255.png",
          slug: "Poussifeu",
          stats: {
            HP: 45,
            attack: 60,
            defense: 40,
            special_attack: 70,
            special_defense: 50,
            speed: 45,
          },
          apiTypes: [
            {
              name: "Feu",
              image:
                "https://static.wikia.nocookie.net/pokemongo/images/3/30/Fire.png",
            },
          ],
          apiGeneration: 3,
          apiResistances: [
            {
              name: "Normal",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Combat",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Vol",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Poison",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Sol",
              damage_multiplier: 2,
              damage_relation: "vulnerable",
            },
            {
              name: "Roche",
              damage_multiplier: 2,
              damage_relation: "vulnerable",
            },
            {
              name: "Insecte",
              damage_multiplier: 0.5,
              damage_relation: "resistant",
            },
            {
              name: "Spectre",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Acier",
              damage_multiplier: 0.5,
              damage_relation: "resistant",
            },
            {
              name: "Feu",
              damage_multiplier: 0.5,
              damage_relation: "resistant",
            },
            {
              name: "Eau",
              damage_multiplier: 2,
              damage_relation: "vulnerable",
            },
            {
              name: "Plante",
              damage_multiplier: 0.5,
              damage_relation: "resistant",
            },
            {
              name: "Électrik",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Psy",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Glace",
              damage_multiplier: 0.5,
              damage_relation: "resistant",
            },
            {
              name: "Dragon",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Ténèbres",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Fée",
              damage_multiplier: 0.5,
              damage_relation: "resistant",
            },
          ],
          resistanceModifyingAbilitiesForApi: [],
          apiEvolutions: [
            {
              name: "Galifeu",
              pokedexId: 256,
            },
          ],
          apiPreEvolution: "none",
          apiResistancesWithAbilities: [],
        },
        {
          id: 258,
          pokedexId: 258,
          name: "Gobou",
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/258.png",
          sprite:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/258.png",
          slug: "Gobou",
          stats: {
            HP: 50,
            attack: 70,
            defense: 50,
            special_attack: 50,
            special_defense: 50,
            speed: 40,
          },
          apiTypes: [
            {
              name: "Eau",
              image:
                "https://static.wikia.nocookie.net/pokemongo/images/9/9d/Water.png",
            },
          ],
          apiGeneration: 3,
          apiResistances: [
            {
              name: "Normal",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Combat",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Vol",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Poison",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Sol",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Roche",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Insecte",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Spectre",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Acier",
              damage_multiplier: 0.5,
              damage_relation: "resistant",
            },
            {
              name: "Feu",
              damage_multiplier: 0.5,
              damage_relation: "resistant",
            },
            {
              name: "Eau",
              damage_multiplier: 0.5,
              damage_relation: "resistant",
            },
            {
              name: "Plante",
              damage_multiplier: 2,
              damage_relation: "vulnerable",
            },
            {
              name: "Électrik",
              damage_multiplier: 2,
              damage_relation: "vulnerable",
            },
            {
              name: "Psy",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Glace",
              damage_multiplier: 0.5,
              damage_relation: "resistant",
            },
            {
              name: "Dragon",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Ténèbres",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
            {
              name: "Fée",
              damage_multiplier: 1,
              damage_relation: "neutral",
            },
          ],
          resistanceModifyingAbilitiesForApi: [],
          apiEvolutions: [
            {
              name: "Flobio",
              pokedexId: 259,
            },
          ],
          apiPreEvolution: "none",
          apiResistancesWithAbilities: [],
        },
      ],
    },
  ];

  console.log(generations.pokemons);
  const redAndBlue = generations.find((g) => g.generation === "rouge et bleu");
  const OrAndArgent = generations.find((g) => g.generation === "or et argent");
  const RubisAndSaphir = generations.find(
    (g) => g.generation === "rubis et saphir"
  );

  const handleAddToTeam = (pokemon) => {

    const currentTeam = JSON.parse(localStorage.getItem("pokemonTeam")) || [];


    if (!currentTeam.some((p) => p.id === pokemon.id)) {
      const newTeam = [...currentTeam, pokemon];
      localStorage.setItem("pokemonTeam", JSON.stringify(newTeam));
    } else {
      alert("Ce Pokémon est déjà dans votre équipe !");
    }
  };

  return (
    <div className="div-starters">
      <h1>Les starters</h1>
      <strong>rouge et bleu</strong>
      <div className="cards-poke">
        {redAndBlue.pokemons.map((pokemon) => (
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
                onClick={() => handleAddToTeam(pokemon)}
              >
                Ajouter à l'équipe
              </button>
              <button
                className="remove-button"
                onClick={() => handleRemoveFromTeam(pokemon)}
              >
                Retirer de l'équipe
              </button>
            </div>
          </div>
        ))}
        <strong>Or et Argent</strong>
        <div className="cards-poke">
          {OrAndArgent.pokemons.map((pokemon) => (
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

                <button
                  className="add-button"
                  onClick={() => handleAddToTeam(pokemon)}
                >
                  Ajouter à l'équipe
                </button>
                <button
                  className="remove-button"
                  onClick={() => handleRemoveFromTeam(pokemon)}
                >
                  Retirer de l'équipe
                </button>
              </div>
            </div>
          ))}
          <strong>rubis et saphir</strong>
          <div className="cards-poke">
            {RubisAndSaphir.pokemons.map((pokemon) => (
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
                    <span className="caract-value">
                      {pokemon.stats.defense}
                    </span>
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
                    onClick={() => handleAddToTeam(pokemon)}
                  >
                    Ajouter à l'équipe
                  </button>
                  <button
                    className="remove-button"
                    onClick={() => handleRemoveFromTeam(pokemon)}
                  >
                    Retirer de l'équipe
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
