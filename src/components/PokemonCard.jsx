import PropTypes from "prop-types";

function PokemonCard({ pokemon }) {
  console.log({ pokemon });
  // let pokemon = pokemonList[0];
  // const pokemon = { name: "bulbasaur" };
  return (
    <>
      <figure>
        {pokemon[0].imgSrc ? (
          <img
            src={pokemon[0].imgSrc}
            alt="bulbazaur"
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

        <figcaption>{pokemon[0].name}</figcaption>
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
