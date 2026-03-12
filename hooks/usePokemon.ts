import { fetchPokemonDetails } from "@/services/api";
import type { PokemonDetails } from "@/types/pokemon";
import { useEffect, useState } from "react";

// custom hook som samlar state + logik för pokemon och dess children
export default function usePokemon() {
  const [pokemon, setPokemon] = useState<PokemonDetails | null>(null);

  // används för att hämta random pokemon. async/await behövs för att vänta på att datan hämtas innan state uppdateras. (separerat från useEFFect pga onPress kommer inte åt en async funktion inuti en useEffect)
  async function handleFetchPokemon() {
    const pokemonData = await fetchPokemonDetails();
    setPokemon(pokemonData);
  }

  // används för att hämta en random pokemon vid mount av sidan.
  useEffect(() => {
    handleFetchPokemon();
  }, []);

  return {
    pokemon,
    handleFetchPokemon,
  };
}
