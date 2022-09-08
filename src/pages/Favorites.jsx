import { useEffect, useState } from "react";
import classes from "./Favorities.module.css";
import { getPokemons } from "../poke-api";
const Favorites = () => {
  const [getAllPokemon, setAllPokemon] = useState([]);
  const [pokeList, setPokeList] = useState([]);
  const pokemonListHandler = async () => {
    const pokeNames = await getPokemons();
    setAllPokemon(pokeNames);
  };
  useEffect(() => {
    pokemonListHandler();
  }, []);
  useEffect(() => {
    getAllPokemon.map((pokemon) =>
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setPokeList((prev) => [...prev, data]);
        })
    );
  }, [getAllPokemon]);
  const idPoke = JSON.parse(localStorage.getItem("favorites"));
  let pokeFill = [];
  for (const id of idPoke) {
    pokeList.filter((poke) => (+poke.id === +id ? pokeFill.push(poke) : ""));
  }
  return (
    <div className={classes.containerFav}>
      <div className={classes.rowFav}>
        {pokeFill.map((pokes, index) => (
          <div className={classes.imageFav} key={index}>
            <img
              className={classes.imgFav}
              src={pokes.sprites.other.dream_world.front_default}
              alt=""
            />

            <div> id: {pokes.id} </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
