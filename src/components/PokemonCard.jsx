const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

function PokemonCard() {
  let pokemon = pokemonList[0];
  return (
    <>
      <figure>
        {pokemon.imgSrc ? (
          <img
            src={pokemon.imgSrc}
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

        <figcaption>{pokemon.name}</figcaption>
      </figure>
    </>
  );
}

export default PokemonCard;
