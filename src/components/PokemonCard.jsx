function PokemonCard() {
  return (
    <>
      <figure>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
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
        <figcaption>Bulbasaur</figcaption>
      </figure>
    </>
  );
}

export default PokemonCard;
