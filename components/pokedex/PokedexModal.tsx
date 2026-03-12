import { PokemonDetails } from "@/types/pokemon";
import { Modal, StyleSheet, View } from "react-native";
import PokemonCard from "../pokemon/PokemonCard";

type PokedexModalProps = {
  selectedPokemon: PokemonDetails | null;
  onClose: () => void;
  onFavourite: (pokemon: PokemonDetails) => void;
};

export default function PokedexModal({
  selectedPokemon,
  onClose,
  onFavourite,
}: PokedexModalProps) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={selectedPokemon !== null}
    >
      <View style={styles.modal}>
        {selectedPokemon && (
          <PokemonCard
            pokemon={selectedPokemon}
            onClose={onClose}
            onFavourite={onFavourite}
          />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
