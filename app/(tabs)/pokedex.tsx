import PokedexList from "@/components/pokedex/PokedexList";
import PokedexModal from "@/components/pokedex/PokedexModal";
import ErrorMessage from "@/components/ui/ErrorMessage";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { colors } from "@/constants/colors";
import usePokedex from "@/hooks/usePokedex";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import pokedexBackGround from "../../assets/images/pokedex-bg.png";

// Pokédex screen that displays a list of Pokémon and allows the user to view details in a modal and manage favourites.
export default function Pokedex() {
  const {
    displayedList,
    selectedPokemon,
    handleReadMore,
    closeModal,
    toggleFavourite,
    setShowFavourites,
    isFavourite,
    loading,
    error,
  } = usePokedex(); // Calls the usePokedex hook and destructures the states and functions needed in this screen

  return (
    <ImageBackground
      source={pokedexBackGround}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.title}>Pokédex</Text>
        <Text style={styles.subtitle}>
          Explore Pokémon and save your favourites
        </Text>
        {selectedPokemon && (
          <PokedexModal
            selectedPokemon={selectedPokemon}
            closeModal={closeModal}
            toggleFavourite={toggleFavourite}
            isFavourite={isFavourite}
          />
        )}
        <View style={styles.buttonContainer}>
          <Pressable
            onPress={() => setShowFavourites(false)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>List</Text>
          </Pressable>
          <Pressable
            onPress={() => setShowFavourites(true)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Favourites</Text>
          </Pressable>
        </View>
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <ErrorMessage message={error} />
        ) : (
          <PokedexList pokemon={displayedList} onReadMore={handleReadMore} />
        )}
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.primary,
    marginTop: 8,
  },
  subtitle: {
    fontSize: 17,
    textAlign: "center",
    color: colors.accent,
    marginTop: 6,
    marginBottom: 20,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 16,
    gap: 30,
  },
  button: {
    backgroundColor: colors.silver,
    paddingVertical: 8,
    paddingHorizontal: 28,
    borderRadius: 10,
  },
  buttonText: {
    color: colors.primary,
    fontWeight: "800",
  },
});
