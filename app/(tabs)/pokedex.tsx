import PokedexList from "@/components/pokedex/PokedexList";
import PokedexModal from "@/components/pokedex/PokedexModal";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import usePokedex from "@/hooks/usePokedex";
import { ImageBackground, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import pokedexBackGround from "../../assets/images/pokedex-bg.png";

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
  } = usePokedex(); // anropar usePokedex & destructar ut de states + funktioner jag behöver i komponenten

  return (
    <ImageBackground
      source={pokedexBackGround}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <SafeAreaView>
        <Text>Pokedex</Text>
        {selectedPokemon && (
          <PokedexModal
            selectedPokemon={selectedPokemon}
            closeModal={closeModal}
            onFavourite={toggleFavourite}
            isFavourite={isFavourite}
          />
        )}
        <View>
          <Pressable onPress={() => setShowFavourites(false)}>
            <Text>List</Text>
          </Pressable>
          <Pressable onPress={() => setShowFavourites(true)}>
            <Text>Show Favourites</Text>
          </Pressable>
        </View>
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <Text>{error}</Text>
        ) : (
          <PokedexList pokemon={displayedList} onReadMore={handleReadMore} />
        )}
      </SafeAreaView>
    </ImageBackground>
  );
}
