import { PokemonDetails } from "@/types/pokemon";
import { getTypeColor } from "@/utils/pokemonColorPicker";
import { BlurView } from "expo-blur";
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import cardImageBg from "../../assets/images/pokemon-image-bg.png";

type PokemonCardProps = {
  pokemon: PokemonDetails;
  onClose?: () => void;
  onFavourite?: (pokemon: PokemonDetails) => void;
};

export default function PokemonCard({
  pokemon,
  onClose,
  onFavourite,
}: PokemonCardProps) {
  return (
    <BlurView intensity={60} style={styles.blurFrame}>
      <View
        style={[styles.card, { backgroundColor: getTypeColor(pokemon.type) }]} //anropar getTypeColor och skickar med pokemonens type för att sätta den färg som matchar typen
      >
        <View style={styles.row}>
          {onFavourite && (
            <Pressable onPress={() => onFavourite(pokemon)}>
              <Text style={styles.icon}>♡</Text>
            </Pressable>
          )}
          {onClose && (
            <Pressable onPress={onClose}>
              <Text style={styles.icon}>✕</Text>
            </Pressable>
          )}
        </View>

        <View style={styles.row}>
          <Text style={styles.name}>{pokemon.name}</Text>
          <Text style={styles.hp}>HP {pokemon.hp}</Text>
        </View>

        <ImageBackground source={cardImageBg} style={styles.imageFrame}>
          <Image source={{ uri: pokemon.image }} style={styles.image} />
        </ImageBackground>

        <View style={styles.row}>
          <Text style={styles.label}>Type</Text>
          <Text style={styles.value}>{pokemon.type}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Ability</Text>
          <Text style={styles.value}>{pokemon.ability}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Height</Text>
          <Text style={styles.value}>{pokemon.height}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Weight</Text>
          <Text style={styles.value}>{pokemon.weight}</Text>
        </View>
      </View>
    </BlurView>
  );
}

const styles = StyleSheet.create({
  blurFrame: {
    borderRadius: 25,
    overflow: "hidden",
    padding: 16,
    width: 315,
  },
  card: {
    borderRadius: 16,
    borderWidth: 5,
    borderColor: "#c0c0c0",
    gap: 10,
    paddingHorizontal: 25,
    paddingVertical: 20,
    paddingTop: 12,
  },
  icon: {
    fontSize: 20,
    color: "#fff",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    textTransform: "capitalize",
  },
  hp: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  label: {
    color: "#fff",
    fontSize: 13,
  },
  value: {
    color: "#fff",
    fontSize: 13,
    textTransform: "capitalize",
    fontWeight: "600",
  },
  imageFrame: {
    alignItems: "center",
    borderWidth: 4,
    borderColor: "#c0c0c0",
    borderRadius: 8,
    padding: 8,
    overflow: "hidden",
  },
  image: {
    width: 190,
    height: 190,
  },
});
