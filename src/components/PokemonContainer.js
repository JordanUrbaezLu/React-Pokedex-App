import React from "react";
import PokemonCard from "./PokemonCard";

const PokemonContainer = ({ handlePokeDexPokemon, pokemonDataList }) => {
  return (
    <ul id="pokemon-container">
      {pokemonDataList.map((pokemon) => {
        return (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            handlePokeDexPokemon={handlePokeDexPokemon}
          />
        );
      })}
    </ul>
  );
};

export default PokemonContainer;
