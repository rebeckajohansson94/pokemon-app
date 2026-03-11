import { Image, ImageBackground, Text } from "react-native";
import backgroundImage from "../../assets/images/home-bg.png";
import pokemonLogo from "../../assets/images/pokemon-logo.png";

export default function Home() {
  return (
    <ImageBackground
      source={backgroundImage}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <Image source={pokemonLogo} style={{ width: 250, height: 250 }} />
      <Text>Homeeeee</Text>
    </ImageBackground>
  );
}
