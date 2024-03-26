import PropTypes from "prop-types";

function PokemonCard({ pokemon }) {
  // console.log({ pokemon });
  // let pokemon = pokemonList[0];
  // const pokemon = { name: "bulbasaur" };
  return (
    <>
      <figure>
        {pokemon.imgSrc ? (
          <img
            src={pokemon.imgSrc}
            alt={pokemon.name}
            className="avatar"
            style={{
              width: "100%",
              height: "auto",
              marginBottom: "0.5rem",
              backgroundColor: "black",
              boxShadow: "inherit",
              borderRadius: "20px",
            }}
          />
        ) : (
          <p>?????</p>
        )}

        <figcaption>{pokemon.name}</figcaption>
      </figure>
    </>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
    })
  ).isRequired,
};

export default PokemonCard;
