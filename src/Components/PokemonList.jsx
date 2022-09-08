import React, { useState, useEffect } from "react";

import PokemonProfile from "./PokemonProfile";
import classes from "./PokemonList.module.css";
const PokemonsList = ({ NamePokemons }) => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    NamePokemons.map((pokemon) => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setPokemons((prev) => [...prev, data]);
        });
    });
  }, [NamePokemons]);

  return (
    <div className={classes.contain}>
      {pokemons.map((pokemon, index) => (
        <PokemonProfile
          pokemon={pokemon}
          id={pokemon.id}
          name={pokemon.name}
          image={pokemon.sprites.other.dream_world.front_default}
          type={pokemon.types[0].type.name}
          abilities={pokemon.abilities}
          game={pokemon.game_indices}
          moves={pokemon.game_indices}
          key={index}
        />
      ))}
    </div>
  );
};

export default PokemonsList;
