import React from "react";

const PokemonCard = ({ pokemon, handlePokeDexPokemon }) => {
  return (
    <li
      id="pokemon-card"
      onClick={() => {
        handlePokeDexPokemon(pokemon);
      }}
    >
      <h1>{pokemon.id}</h1>
      <h2>{pokemon.name}</h2>
      <h3 style={{padding: "12px"}}>{pokemon.types[0].type.name}</h3>
      <img
        src={pokemon?.sprites?.other?.home?.front_default}
        width="225px"
      ></img>
    </li>
  );
};

export default PokemonCard;
