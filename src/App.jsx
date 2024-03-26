import { useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";
import NavBAr from "./components/NavBAr";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  console.log({ pokemonIndex });

  const handleClickPrecedent = () => {
    if (pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1);
    }
  };
  const handleClickSuivant = () => {
    if (pokemonIndex < pokemonList.length - 1) {
      setPokemonIndex(pokemonIndex + 1);
    }
  };
  console.log({ pokemonIndex });
  console.log({ pokemonList });
  return (
    <>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <NavBAr
        pokemonIndex={pokemonIndex}
        handleClickSuivant={handleClickSuivant}
        handleClickPrecedent={handleClickPrecedent}
        pokemonList={pokemonList}
      />
      {/* <button
        onClick={handleClickPrecedent}
        style={{
          display: pokemonIndex === 0 ? "none" : "inline-block",
        }}
      >
        présédent
      </button>
      <button
        onClick={handleClickSuivant}
        style={{
          display:
            pokemonIndex === pokemonList.length - 1 ? "none" : "inline-block",
        }}
      >
        suivant
      </button> */}
    </>
  );
}

export default App;
