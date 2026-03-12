import type { PokemonDetails, PokemonListItem } from "@/types/pokemon";

const url = "https://pokeapi.co/api/v2";

// hämtar en lista av 20 pokemonnamn till pokedexet.
export async function fetchPokemon(): Promise<PokemonListItem[]> {
  // returnerar ett promise om att värdet som returneras är en array av typen pokemonlistitem
  try {
    const response = await fetch(`${url}/pokemon?limit=40`);
    if (!response.ok) throw new Error("Failed to fetch");
    const data = await response.json();

    return data.results; // returnerar hela arrayen
  } catch (error) {
    throw error;
  }
}

// återanvändbar funktion som hämtar en pokemon med detaljer.
// om pokemonUrl skickas in hämtas en specifik pokemon, annars genereras en random url.
// pokemonUrl är optional och hanteras med en ternary.
export async function fetchPokemonDetails(
  pokemonUrl?: string,
): Promise<PokemonDetails> {
  try {
    const finalUrl =
      pokemonUrl !== undefined
        ? pokemonUrl
        : `${url}/pokemon/${Math.floor(Math.random() * 1000) + 1}`; // 1000 är temporär logik pga osäker på API'ets längd
    const response = await fetch(finalUrl);
    if (!response.ok) throw new Error("Failed to fetch");
    const data = await response.json();

    // sparar den datan jag vill komma åt i ett objekt, returnerar sedan objektet
    const pokemon = {
      id: data.id,
      name: data.name,
      image: data.sprites.other.home.front_default,
      type: data.types[0].type.name,
      height: data.height,
      weight: data.weight,
      hp: data.stats[0].base_stat,
      ability: data.abilities[0].ability.name,
      url: finalUrl, // objektets url sätts till finalUrl, som antingen kommer vara random eller pokemonUrl
    };
    console.log(`name: ${pokemon.name}`);
    return pokemon;
  } catch (error) {
    throw error;
  }
}
