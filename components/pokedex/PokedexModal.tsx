import { PokemonDetails } from "@/types/pokemon";
import { Modal, StyleSheet, View } from "react-native";
import PokemonCard from "../pokemon/PokemonCard";

type PokedexModalProps = {
  selectedPokemon: PokemonDetails | null;
  closeModal: () => void;
  toggleFavourite: (pokemon: PokemonDetails) => void;
  isFavourite: boolean;
};

// Modal component used in the Pokédex screen, it is shown when a Pokémon is selected and displays the Pokémon details.
export default function PokedexModal({
  selectedPokemon,
  closeModal,
  toggleFavourite,
  isFavourite,
}: PokedexModalProps) {
  return (
    <Modal animationType="slide" transparent={true}>
      <View style={styles.modal}>
        {selectedPokemon && ( // Only rendered when selectedPokemon contains data
          <PokemonCard
            pokemon={selectedPokemon}
            closeModal={closeModal}
            toggleFavourite={toggleFavourite}
            isFavourite={isFavourite}
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
