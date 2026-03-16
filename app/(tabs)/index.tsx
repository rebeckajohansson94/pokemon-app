import { Image, ImageBackground, StatusBar, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import backgroundImage from "../../assets/images/home-bg.png";
import pokemonLogo from "../../assets/images/pokemon-logo.png";

export default function Home() {
  return (
    <ImageBackground
      source={backgroundImage}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <StatusBar />
      <SafeAreaView>
        <Image source={pokemonLogo} style={{ width: 280, height: 280 }} />
        <Text>Homeeeee</Text>
      </SafeAreaView>
    </ImageBackground>
  );
}
