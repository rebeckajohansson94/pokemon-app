import type { PokemonListItem } from "@/types/pokemon";
import { FlatList, View } from "react-native";
import PokedexCard from "./PokedexCard";

type PokedexListProps = {
  pokemon: PokemonListItem[];
  onReadMore: (url: string) => void;
};

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
