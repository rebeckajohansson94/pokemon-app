import { fetchPokemonDetails } from "@/services/api";
import type { PokemonDetails } from "@/types/pokemon";
import { useEffect, useState } from "react";

// Custom hook that handles state and logic for the Pokémon roulette screen.
export default function usePokemon() {
  const [pokemon, setPokemon] = useState<PokemonDetails | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetches a random Pokémon and updates the state when the user presses the button.
  async function fetchRandomPokemon() {
    try {
      setLoading(true);
      setError("");

      const pokemonData = await fetchPokemonDetails();
      setPokemon(pokemonData);
    } catch {
      setError("Could not load Pokémon.");
    } finally {
      setLoading(false);
    }
  }

  // Loads a random Pokémon when the screen first mounts.
  useEffect(() => {
    fetchRandomPokemon();
  }, []);

  return {
    pokemon,
    fetchRandomPokemon,
    loading,
    error,
  };
}
