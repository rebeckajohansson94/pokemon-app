import { fetchPokemonDetails } from "@/services/api";
import { PokemonDetails } from "@/types/pokemon";
import { useEffect, useState } from "react";

// Custom hook used in the Home screen, fetches a specific Pokémon (Pikachu) when the screen loads and manages loading and error state.
export default function useHome() {
  const [pokemon, setPokemon] = useState<PokemonDetails | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetches Pikachu on initial render and stores it in state, try/catch handles possible errors and finally ensures loading is set to false.
  useEffect(() => {
    async function loadPokemon() {
      try {
        setLoading(true);
        setError("");

        const data = await fetchPokemonDetails(
          "https://pokeapi.co/api/v2/pokemon/pikachu",
        );

        setPokemon(data);
      } catch {
        setError("Could not load Pokémon.");
      } finally {
        setLoading(false);
      }
    }

    loadPokemon();
  }, []);

  return { pokemon, loading, error };
}
