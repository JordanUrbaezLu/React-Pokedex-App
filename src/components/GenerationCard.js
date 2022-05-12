import React from "react";

const GenerationCard = ( {generation, handleBackgroundChange, handleUrlChange} ) => {

    return (
        <li id="generation-card" onClick={() => {
            handleUrlChange(`https://pokeapi.co/api/v2/pokemon?limit=${generation.length}&offset=${generation.start}`, generation.name);
            handleBackgroundChange(generation.url);
            }}>
            <h2>{generation.name}</h2>
        </li>
    )
}

export default GenerationCard;