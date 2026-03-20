import type { PokemonListItem } from "@/types/pokemon";
import { FlatList, View } from "react-native";
import PokedexCard from "./PokedexCard";

type PokedexListProps = {
  pokemon: PokemonListItem[];
  onReadMore: (url: string) => void;
};

// Component that renders a list of Pokémon using FlatList, and displays each item as a PokedexCard.
export default function PokedexList({ pokemon, onReadMore }: PokedexListProps) {
  return (
    <View>
      <FlatList
        data={pokemon}
        renderItem={({ item }) => (
          <PokedexCard pokemon={item} onReadMore={onReadMore} />
        )}
        keyExtractor={(item) => item.url}
      />
    </View>
  );
}
