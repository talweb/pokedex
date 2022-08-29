import React, { useState, useEffect } from "react";
import PokemonsList from "./Components/PokemonList";
import { getPokemons } from "./poke-api";
import "./App.css";
const App = () => {
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
      <div className="app">
        <div>
          <img
            className="logo"
            src="https://freepikpsd.com/file/2019/10/pokemon-logo-text-png-7-Transparent-Images.png"
            alt="logo pokemon"
          />
          {isPokemons ? (
            <PokemonsList NamePokemons={NamePokemons} />
          ) : (
            <h3>Loading</h3>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
