import React from "react";
import GenerationCard from "./GenerationCard";
import {nanoid} from "nanoid"

const generationArray = [   
    { url: "https://wallpaperaccess.com/full/24934.jpg", name: "Gen I - Kanto Region", start : 0, end : 151, length: 151},                            
    { url : "https://wallpaperaccess.com/full/5258766.jpg", name : "Gen II - Johto Region", start : 151, end : 251, length : 100},                         
    { url : "https://wallpaperaccess.com/full/159250.jpg", name : "Gen III - Hoenn Region", start : 251, end : 386, length : 135}, 
    { url : "https://wallpaperaccess.com/full/146817.jpg", name : "Gen IV - Sinnoh Region", start : 386, end : 493, length : 107}, 
    { url : "https://wallpapercave.com/wp/wp7582565.jpg", name : "Gen V - Unova Region", start : 493, end : 649, length : 156}, 
    { url : "https://wallpapercave.com/wp/wp8864156.jpg", name : "Gen VI - Kalos Region", start : 649, end : 721, length : 72}, 
    { url : "https://wallpaperaccess.com/full/1919633.jpg", name : "Gen VII - Alola Region", start : 721, end : 809, length : 88}, 
    { url : "https://3.bp.blogspot.com/-jnEY9x4teF0/XPxzBg-YxLI/AAAAAAAADtc/tLZ5gLhMup0fYH9HCaLtKc1_s5QpfNmuwCKgBGAs/w4096-h2304-c/grookey-scorbunny-sobble-pokemon-sword-and-shield-uhdpaper.com-4K-1.jpg", name : "Gen VIII - Galar Region", start : 809, end : 898, length : 89} 
    ];

const PokemonGenerations = ( {handleUrlChange, handleBackgroundChange} ) => {

    return (
        <ul id="generation-container">
            {generationArray.map((generation) => {return <GenerationCard key={nanoid()} generation={generation} handleBackgroundChange={handleBackgroundChange} handleUrlChange={handleUrlChange} />})}
        </ul>
    )
}

export default PokemonGenerations;