import PropTypes from "prop-types";
/* eslint-disable react/prop-types */
function NavBAr({ pokemonSetIndex, pokemonList }) {
  const handleChange = (index) => {
    pokemonSetIndex(index);
    console.log(pokemonList[index].name);
    if (pokemonList[index].name === "pikachu") {
      alert("pika pikachu !!!");
    }
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
NavBAr.propTypes = {
  pokemonSetIndex: PropTypes.func.isRequired,
  pokemonList: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
};

export default NavBAr;
