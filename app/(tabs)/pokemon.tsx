import PokemonCard from "@/components/pokemon/PokemonCard";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import usePokemon from "@/hooks/usePokemon";
import { ImageBackground, Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import pokemonBackground from "../../assets/images/pokemon-bg.jpg";

export default function Pokemon() {
  const { pokemon, fetchRandomPokemon, loading, error } = usePokemon(); // anropar usePokemon & destructar utstatet + funktionen jag behöver i komponenten

  return (
    <ImageBackground
      source={pokemonBackground}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <SafeAreaView>
        <Text>Pokémon roulette</Text>

        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <Text>{error}</Text>
        ) : (
          pokemon && <PokemonCard pokemon={pokemon} />
        )}
        <Pressable onPress={fetchRandomPokemon}>
          <Text>Generate a new Pokémon!</Text>
        </Pressable>
      </SafeAreaView>
    </ImageBackground>
  );
}
