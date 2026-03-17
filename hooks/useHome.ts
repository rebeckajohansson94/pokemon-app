import { fetchPokemonDetails } from "@/services/api";
import { PokemonDetails } from "@/types/pokemon";
import { useEffect, useState } from "react";

export default function useHome() {
  const [pokemon, setPokemon] = useState<PokemonDetails | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
