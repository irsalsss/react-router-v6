export const getListPokemon = async() => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1&offset=0");
  const pokemon = await res.json();
  return pokemon
}

export const getDetailPokemon = async (id) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const detail = await res.json();
  return detail
}