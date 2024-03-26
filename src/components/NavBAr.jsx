/* eslint-disable react/prop-types */
function NavBAr({ pokemonSetIndex, pokemonList }) {
  const handleChange = (index) => {
    pokemonSetIndex(index);
  };
  return (
    <>
      {pokemonList.map((pokemon, index) => (
        <button onClick={() => handleChange(index)} key={pokemon.name}>
          {pokemon.name}
        </button>
      ))}
    </>
  );
}

export default NavBAr;
