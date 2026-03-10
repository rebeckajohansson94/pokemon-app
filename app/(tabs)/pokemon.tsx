import PokemonCard from "@/components/pokemon/PokemonCard";
import { fetchRandomPokemon } from "@/services/api";
import { PokemonDetails } from "@/types/pokemon";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";

export default function Pokemon() {
  const [pokemon, setPokemon] = useState<PokemonDetails | null>(null);

  async function handleFetchPokemon() {
    const pokemonData = await fetchRandomPokemon();
    setPokemon(pokemonData);

    console.log(pokemonData);
  }

  return (
    <View>
      <Text>Pokemon</Text>
      <Pressable onPress={handleFetchPokemon}>
        <Text>Genereate a Pokemon</Text>
      </Pressable>
      {/* om pokemon har värde/inte är null, då visas pokemoncard */}
      {pokemon && <PokemonCard pokemon={pokemon} />}
    </View>
  );
}
