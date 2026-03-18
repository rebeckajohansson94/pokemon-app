import { fetchPokemonDetails } from "@/services/api";
import type { PokemonDetails } from "@/types/pokemon";
import { useEffect, useState } from "react";

// custom hook som samlar state + logik för pokemon och dess children
export default function usePokemon() {
  const [pokemon, setPokemon] = useState<PokemonDetails | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // används för att hämta random pokemon. async/await behövs för att vänta på att datan hämtas innan state uppdateras. (separerat från useEffect pga onPress kommer inte åt en async funktion inuti en useEffect)
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

  // hämtar en random pokemon vid mount av sidan, fetchRandomPokemon återanvänds sedan vid knapptryckning
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
