import React from "react";

const PokeDex = ( {pokedexPokemon} ) => {
    console.log(pokedexPokemon)
    return (
        <>
            {pokedexPokemon && (
                <div id="pokedex">
                    <h1 id="pokedex-name">{pokedexPokemon?.name?.toUpperCase()}</h1>
                    <img src={pokedexPokemon?.sprites?.other?.home?.front_default} width="350px"></img>

                    <div id="pokemonData__container">
                        <div id="pokemonInfo-container">
                            <h2>Info</h2>
                            <h4>Type: {pokedexPokemon?.types[0].type?.name} {pokedexPokemon.types[1] !== undefined ? `/ ${pokedexPokemon?.types[1]?.type?.name}` : ""}</h4>
                            <h4>Ability: {pokedexPokemon?.abilities[0].ability.name}</h4>
                            <h4>Weight: {pokedexPokemon?.weight / 10} kg</h4>
                            <h4>Height: {pokedexPokemon?.height / 10} m</h4>
                        </div>
                        <div id="stats__container">
                            <h2>Stats</h2>
                            <h4>{pokedexPokemon?.stats[0].stat.name}:  {pokedexPokemon?.stats[0].base_stat}</h4>
                            <h4>{pokedexPokemon?.stats[1].stat.name}:  {pokedexPokemon?.stats[1].base_stat}</h4>
                            <h4>{pokedexPokemon?.stats[2].stat.name}:  {pokedexPokemon?.stats[2].base_stat}</h4>
                            <h4>{pokedexPokemon?.stats[3].stat.name}:  {pokedexPokemon?.stats[3].base_stat}</h4>
                            <h4>{pokedexPokemon?.stats[4].stat.name}:  {pokedexPokemon?.stats[4].base_stat}</h4>
                            <h4>{pokedexPokemon?.stats[5].stat.name}:  {pokedexPokemon?.stats[5].base_stat}</h4>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default PokeDex;