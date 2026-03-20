import type { PokemonDetails, PokemonListItem } from "@/types/pokemon";

const url = "https://pokeapi.co/api/v2";

// Fetches a list of Pokémon names used in the Pokédex view.
export async function fetchPokemon(): Promise<PokemonListItem[]> {
  const response = await fetch(`${url}/pokemon?limit=100`);
  if (!response.ok) throw new Error("Failed to fetch pokemon");

  const data = await response.json();
  return data.results;
}

// Reusable function that fetches detailed Pokémon data. If no URL is provided (optional), a random Pokémon is fetched instead.
export async function fetchPokemonDetails(
  pokemonUrl?: string,
): Promise<PokemonDetails> {
  const finalUrl = pokemonUrl // Uses a ternary to decide which URL to fetch
    ? pokemonUrl
    : `${url}/pokemon/${Math.floor(Math.random() * 1025) + 1}`; // Generates a random Pokémon ID within the valid API range
  const response = await fetch(finalUrl);
  if (!response.ok) throw new Error("Could not fetch pokemon details");
  const data = await response.json();

  // Picks out the Pokémon data needed and stores it in a new object
  const pokemon = {
    id: data.id,
    name: data.name,
    image: data.sprites.other.home.front_default,
    type: data.types[0].type.name,
    height: data.height,
    weight: data.weight,
    hp: data.stats[0].base_stat,
    ability: data.abilities[0].ability.name,
    url: finalUrl, // Stores the used URL so it can be referenced later in the app
  };
  return pokemon;
}
