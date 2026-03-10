import { PokemonDetails } from "@/types/pokemon";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

type PokemonCardProps = {
  pokemon: PokemonDetails;
  onClose?: () => void;
  onFavourite?: () => void;
};

export default function PokemonCard({
  pokemon,
  onClose,
  onFavourite,
}: PokemonCardProps) {
  return (
    <View>
      <View>
        {onClose && (
          <Pressable>
            <Text>X</Text>
          </Pressable>
        )}
        {onFavourite && (
          <Pressable>
            <Text>Heart</Text>
          </Pressable>
        )}
      </View>
      <Text>{pokemon.name}</Text>
      <Text>{pokemon.hp}</Text>
      <View>
        <Image source={{ uri: pokemon.image }} style={styles.image} />
      </View>
      <View>
        <Text>{pokemon.type}</Text>
        <Text>{pokemon.ability}</Text>
      </View>
      <View>
        <Text>{pokemon.height}</Text>
        <Text>{pokemon.weight} </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
  },
});
