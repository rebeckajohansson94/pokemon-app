import { Image, Text, View } from "react-native";
import pokemonLogo from "../../assets/images/pokemon-logo.png";

export default function Home() {
  return (
    <View>
      <Image source={pokemonLogo} style={{ width: 250, height: 250 }} />
      <Text>Homepaaage</Text>
    </View>
  );
}
