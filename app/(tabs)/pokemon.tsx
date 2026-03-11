import PokemonCard from "@/components/pokemon/PokemonCard";
import { fetchPokemonDetails } from "@/services/api";
import type { PokemonDetails } from "@/types/pokemon";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";

export default function Pokemon() {
  const [pokemon, setPokemon] = useState<PokemonDetails | null>(null);

  async function handleFetchPokemon() {
    const pokemonData = await fetchPokemonDetails(); // hämtar en slumpmässig pokemon, async/await behövs för att vänta på att datan hämtas innan state uppdateras
    setPokemon(pokemonData);

    console.log(pokemonData);
  }

  return (
    <View>
      <Text>Pokemon</Text>
      <Pressable onPress={handleFetchPokemon}>
        <Text>Generate a Pokemon</Text>
      </Pressable>
      {/* om pokemon har värde/inte är null, då visas pokemoncard */}
      {pokemon && <PokemonCard pokemon={pokemon} />}
    </View>
  );
}
