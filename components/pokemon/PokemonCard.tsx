import { colors } from "@/constants/colors";
import { PokemonDetails } from "@/types/pokemon";
import { getTypeColor } from "@/utils/pokemonColorPicker";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
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
  closeModal?: () => void;
  onFavourite?: (pokemon: PokemonDetails) => void;
  isFavourite?: boolean;
};

export default function PokemonCard({
  pokemon,
  closeModal,
  onFavourite,
  isFavourite,
}: PokemonCardProps) {
  return (
    <BlurView intensity={60} style={styles.blurFrame}>
      <View
        style={[styles.card, { backgroundColor: getTypeColor(pokemon.type) }]}
      >
        <View style={styles.row}>
          {onFavourite && (
            <Pressable onPress={() => onFavourite(pokemon)}>
              <Text style={styles.icon}>
                <FontAwesome
                  name={isFavourite ? "heart" : "heart-o"}
                  size={24}
                  color={isFavourite ? colors.accent : colors.primary}
                />
              </Text>
            </Pressable>
          )}
          {closeModal && (
            <Pressable onPress={closeModal}>
              <Text style={styles.icon}>
                <AntDesign name="close" size={24} color="white" />
              </Text>
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
          <Text style={styles.stats}>Type</Text>
          <Text style={[styles.stats, styles.value]}>{pokemon.type}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.stats}>Ability</Text>
          <Text style={[styles.stats, styles.value]}>{pokemon.ability}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.stats}>Height</Text>
          <Text style={[styles.stats, styles.value]}>{pokemon.height}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.stats}>Weight</Text>
          <Text style={[styles.stats, styles.value]}>{pokemon.weight}</Text>
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
    borderColor: colors.silver,
    gap: 10,
    paddingHorizontal: 25,
    paddingVertical: 20,
    paddingTop: 12,
  },
  icon: {
    fontSize: 20,
    color: colors.primary,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.primary,
    textTransform: "capitalize",
  },
  hp: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.primary,
  },
  stats: {
    color: colors.primary,
    fontSize: 13,
  },
  value: {
    textTransform: "capitalize",
    fontWeight: "600",
  },
  imageFrame: {
    alignItems: "center",
    borderWidth: 4,
    borderColor: colors.silver,
    borderRadius: 8,
    padding: 8,
    overflow: "hidden",
  },
  image: {
    width: 190,
    height: 190,
  },
});
