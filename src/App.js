import React, { useEffect, useState } from "react";
import "./App.css";
import PokemonContainer from "./components/PokemonContainer";
import PokemonGenerations from "./components/PokemonGenerations";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import PokeDex from "./components/PokeDex";

const App = () => {
  const [pokemonDataList, setPokemonDataList] = useState([]);
  const [url, setUrl] = useState("");
  const [backgroundUrl, setBackgroundUrl] = useState(
    "https://images.alphacoders.com/115/1159891.jpg"
  );
  const [keyword, setKeyword] = useState("");
  const [genName, setGenName] = useState("Pokemon Regions");
  const [pokedexPokemon, setPokedexPokemon] = useState();

  const getPokemonData = async () => {
    const res = await axios.get(url);
    getPokemon(res.data.results);
  };

  const getPokemon = async (data) => {
    const filteredData = data?.filter((pokemon) =>
      pokemon.name.includes(keyword)
    );
    filteredData?.map(async (pokemon) => {
      const pokemonInfo = await axios.get(pokemon.url);
      setPokemonDataList((state) => {
        state = [...state, pokemonInfo.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        //the array doesnt get put into the state in numerical order so you
        //have to sort it in order before you setPokemonData()
        return state;
      });
    });
  };

  const handleUrlChange = (newUrl, generationName) => {
    setUrl(newUrl);
    setGenName(generationName);
  };

  const handleSubmit = (input) => {
    setKeyword(input); //set the keyword to the input from the SearchBar
  };

  const handleBackgroundChange = (url) => {
    setBackgroundUrl(url);
  };

  const handlePokeDexPokemon = (pokemon) => {
    setPokedexPokemon(pokemon);
  };

  useEffect(() => {
    setPokemonDataList([]); //reset the list
    getPokemonData(); //get the list
  }, [url, keyword]);

  useEffect(() => {
    document.body.style.background = `url(${backgroundUrl}) no-repeat center center fixed`;
    document.body.style.backgroundSize = "cover";
  }, [backgroundUrl]);

  return (
    <div id="App">
      <div id="app-name">AJ's Pokedex App</div>
      <SearchBar handleSubmit={handleSubmit} />
      <div id="gen-name">{genName}</div>
      <PokemonGenerations
        handleBackgroundChange={handleBackgroundChange}
        handleUrlChange={handleUrlChange}
      />
      <PokemonContainer
        handlePokeDexPokemon={handlePokeDexPokemon}
        pokemonDataList={pokemonDataList}
      />
      <PokeDex pokedexPokemon={pokedexPokemon} />
    </div>
  );
};

export default App;
