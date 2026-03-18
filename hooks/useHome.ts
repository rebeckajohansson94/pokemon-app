import { fetchPokemonDetails } from "@/services/api";
import { PokemonDetails } from "@/types/pokemon";
import { useEffect, useState } from "react";

export default function useHome() {
  const [pokemon, setPokemon] = useState<PokemonDetails | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // hämtar pikachu vid mount och sparar i pokemon-state. try/catch hanterar eventuella fel, finally säkerställer att loading alltid stängs av
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
