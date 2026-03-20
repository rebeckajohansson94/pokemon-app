import ErrorMessage from "@/components/ui/ErrorMessage";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { colors } from "@/constants/colors";
import useHome from "@/hooks/useHome";
import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import backgroundImage from "../../assets/images/home-bg.png";
import pokemonLogo from "../../assets/images/pokemon-logo.png";

// Home screen of the app, fetches and displays a random Pokémon and handles loading and error states.
export default function Home() {
  const { pokemon, loading, error } = useHome();

  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.imageBackground}
      resizeMode="cover"
    >
      <StatusBar />
      <SafeAreaView style={styles.main}>
        <Image source={pokemonLogo} style={styles.logo} />
        <Text style={[styles.title, styles.textShadow]}>
          Welcome to <Text style={styles.descriptionTitle}>PokéApp</Text>!
        </Text>
        <Text
          style={[
            styles.description,
            styles.textShadow,
            styles.descriptionTitle,
          ]}
        >
          Discover your Pokémon
        </Text>
        <Text style={[styles.description, styles.textShadow]}>
          Generate a random Pokémon, or explore the Pokédex - save your
          favourites and build your own collection!
        </Text>
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <ErrorMessage message={error} />
        ) : (
          pokemon && (
            <Image
              source={{ uri: pokemon.image }}
              style={styles.pokemonImage}
            />
          )
        )}
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
  main: {
    alignItems: "center",
    paddingHorizontal: 30,
    gap: 12,
  },
  logo: {
    width: 260,
    height: 220,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 30,
  },
  description: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.primary,
    textAlign: "center",
  },
  textShadow: {
    textShadowColor: "rgba(0,0,0,0.8)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  descriptionTitle: {
    color: colors.accent,
    fontStyle: "italic",
  },
  pokemonImage: {
    height: 200,
    width: 200,
  },
});
