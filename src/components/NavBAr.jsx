/* eslint-disable react/prop-types */
function NavBAr({
  handleClickPrecedent,
  handleClickSuivant,
  pokemonIndex,
  pokemonList,
}) {
  return (
    <>
      <button
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
      </button>
    </>
  );
}

export default NavBAr;
