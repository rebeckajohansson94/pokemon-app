import { ImageBackground, Text } from "react-native";
import pokedexBackGround from "../../assets/images/pokedex-img.png";

export default function Pokedex() {
  return (
    <ImageBackground
      source={pokedexBackGround}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <Text>Pokedex</Text>
    </ImageBackground>
  );
}
