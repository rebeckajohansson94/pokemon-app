import { colors } from "@/constants/colors";
import type { PokemonListItem } from "@/types/pokemon";
import { BlurView } from "expo-blur";
import { Pressable, StyleSheet, Text } from "react-native";

type PokedexCardProps = {
  pokemon: PokemonListItem;
  onReadMore: (url: string) => void;
};

// Card component used in the Pokédex list, displays the Pokémon name and a button to view more details.
export default function PokedexCard({ pokemon, onReadMore }: PokedexCardProps) {
  return (
    <BlurView intensity={60} style={styles.card}>
      <Text style={[styles.name, styles.textShadow]}>{pokemon.name}</Text>

      <Pressable style={styles.button} onPress={() => onReadMore(pokemon.url)}>
        <Text style={[styles.buttonText, styles.textShadow]}>Read more</Text>
      </Pressable>
    </BlurView>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    backgroundColor: "#e4e2e263",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 16,
    marginBottom: 12,
    overflow: "hidden",
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
    textTransform: "capitalize",
    color: colors.primary,
  },
  button: {
    backgroundColor: colors.accent,
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 20,
    shadowColor: "#2e2e2e",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
  },
  buttonText: {
    color: colors.primary,
    fontWeight: "700",
  },
  textShadow: {
    textShadowColor: "rgb(134, 134, 134)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
});
