import PokemonCard from "@/components/pokemon/PokemonCard";
import ErrorMessage from "@/components/ui/ErrorMessage";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { colors } from "@/constants/colors";
import usePokemon from "@/hooks/usePokemon";
import { ImageBackground, Pressable, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import pokemonBackground from "../../assets/images/pokemon-bg.jpg";

// Screen that fetches and displays a random Pokémon, the user can generate a new random Pokémon by pressing the button.
export default function Pokemon() {
  const { pokemon, fetchRandomPokemon, loading, error } = usePokemon(); // Calls the usePokemon hook and destructures the states and function needed in this screen

  return (
    <ImageBackground
      source={pokemonBackground}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.main}>
        <Text style={[styles.title, styles.textShadow]}>Pokémon roulette</Text>

        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <ErrorMessage message={error} />
        ) : (
          pokemon && <PokemonCard pokemon={pokemon} />
        )}
        <Pressable onPress={fetchRandomPokemon} style={styles.button}>
          <Text style={[styles.buttonText, styles.textShadow]}>
            Generate a new Pokémon!
          </Text>
        </Pressable>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    paddingTop: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.accent,
    marginBottom: 30,
  },
  button: {
    backgroundColor: colors.accent,
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginTop: 30,
    shadowColor: "#2e2e2e",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
  },
  buttonText: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: "600",
  },
  textShadow: {
    textShadowColor: "rgb(134, 134, 134)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
});
