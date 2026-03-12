import PokemonCard from "@/components/pokemon/PokemonCard";
import usePokemon from "@/hooks/usePokemon";
import { ImageBackground, Pressable, Text } from "react-native";
import pokemonBackground from "../../assets/images/pokemon-bg.jpg";

export default function Pokemon() {
  const { pokemon, handleFetchPokemon } = usePokemon(); // anropar usePokemon & destructar utstatet + funktionen jag behöver i komponenten

  return (
    <ImageBackground
      source={pokemonBackground}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <Text>Pokémon roulette</Text>

      {/* om pokemon har värde/inte är null, då visas pokemoncard */}
      {pokemon && <PokemonCard pokemon={pokemon} />}
      <Pressable onPress={handleFetchPokemon}>
        <Text>Generate a new Pokémon!</Text>
      </Pressable>
    </ImageBackground>
  );
}
