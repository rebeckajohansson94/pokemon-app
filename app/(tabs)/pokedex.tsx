import PokedexList from "@/components/pokedex/PokedexList";
import PokedexModal from "@/components/pokedex/PokedexModal";
import usePokedex from "@/hooks/usePokedex";
import { ImageBackground, Pressable, Text, View } from "react-native";
import pokedexBackGround from "../../assets/images/pokedex-img.png";

export default function Pokedex() {
  const {
    displayedList,
    selectedPokemon,
    handleReadMore,
    handleOnClose,
    handleFavourite,
    setShowFavourites,
  } = usePokedex(); // anropar usePokedex & destructar ut de states + funktioner jag behöver i komponenten

  return (
    <ImageBackground
      source={pokedexBackGround}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <Text>Pokedex</Text>
      <PokedexModal
        selectedPokemon={selectedPokemon}
        onClose={handleOnClose}
        onFavourite={handleFavourite}
      />
      <View>
        <Pressable onPress={() => setShowFavourites(false)}>
          <Text>List</Text>
        </Pressable>
        <Pressable onPress={() => setShowFavourites(true)}>
          <Text>Show Favourites</Text>
        </Pressable>
      </View>
      <PokedexList pokemon={displayedList} onReadMore={handleReadMore} />
    </ImageBackground>
  );
}
