import { PokemonDetails, PokemonListItem } from "@/types/pokemon";

const url = "https://pokeapi.co/api/v2";

// funktion som hämtar en lista av 20 pokemonnamn till pokedexet.
export async function fetchPokemon(): Promise<PokemonListItem[]> {
  // returnerar ett löfte om att värdet som returneras är en array av typen pokemonlistitem
  try {
    const response = await fetch(`${url}/pokemon?limit=20`);
    const data = await response.json();

    return data.results; //returnerar hela arrayen
  } catch (error) {
    console.log("No Pokemon found!");
    throw error;
  }
}

// hämtar pokemon med detaljer, används både via fetchrandompokemon (pokemon-tabben) + från pokedex listan med "läs mer" på vardera pokemon, som sedan skickar med dess url som argument
export async function fetchPokemonDetails(
  pokemonUrl: string,
): Promise<PokemonDetails> {
  try {
    const response = await fetch(pokemonUrl);
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
      url: pokemonUrl,
    };
    console.log(`name: ${pokemon.name}`);
    return pokemon;
  } catch (error) {
    console.log("No Pokemon found!");
    throw error;
  }
}

// anropas i pokemon-tabben för att först generera en unik url, som sedan hämtar en pokemon med detaljer från fetchpokemondetails
export async function fetchRandomPokemon(): Promise<PokemonDetails> {
  const randomId = Math.floor(Math.random() * 1025) + 1; // ger ett heltal mellan 1-1025. 1025 pga osäker hur många pokemons det finns i api'et, funderar på annan logik

  const pokemonUrl = `${url}/pokemon/${randomId}`;
  return fetchPokemonDetails(pokemonUrl);
}
