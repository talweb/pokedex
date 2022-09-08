import React, { useState, useEffect } from "react";
import PokemonsList from "../Components/PokemonList";
import { getPokemons } from "..//poke-api";
const Home = () => {
  const [NamePokemons, setNamePokemons] = useState();
  const [isPokemons, setIsPokemons] = useState(false);

  const pokemonHandler = async () => {
    const pokemons = await getPokemons();
    setNamePokemons(pokemons);
    setIsPokemons(true);
  };
  useEffect(() => {
    pokemonHandler();
  }, []);

  return (
    <>
      {isPokemons ? (
        <PokemonsList NamePokemons={NamePokemons} />
      ) : (
        <h3>Loading</h3>
      )}
    </>
  );
};

export default Home;
