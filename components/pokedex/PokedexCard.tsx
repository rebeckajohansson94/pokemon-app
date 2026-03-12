import type { PokemonListItem } from "@/types/pokemon";
import { Pressable, Text, View } from "react-native";

type PokedexCardProps = {
  pokemon: PokemonListItem;
  onReadMore: (url: string) => void;
};

export default function PokedexCard({ pokemon, onReadMore }: PokedexCardProps) {
  return (
    <View>
      <Text>{pokemon.name}</Text>
      <Pressable onPress={() => onReadMore(pokemon.url)}>
        <Text>Read more</Text>
      </Pressable>
    </View>
  );
}
