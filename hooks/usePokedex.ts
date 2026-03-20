import { fetchPokemon, fetchPokemonDetails } from "@/services/api";
import type { PokemonDetails, PokemonListItem } from "@/types/pokemon";
import { useEffect, useState } from "react";

// Custom hook that handles state and logic for the Pokédex screen.
export default function usePokedex() {
  // States used for the Pokémon list, selected Pokémon, favourites, loading and error handling.
  const [pokemonList, setPokemonList] = useState<PokemonListItem[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonDetails | null>(
    null,
  );
  const [showFavourites, setShowFavourites] = useState(false);
  const [favouriteList, setFavouriteList] = useState<PokemonListItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetches the Pokémon list on initial render and stores it in state.
  useEffect(() => {
    async function loadPokemonList() {
      setLoading(true);
      setError("");

      try {
        const data = await fetchPokemon();
        setPokemonList(data);
      } catch {
        setError("Could not load pokemon list.");
      } finally {
        setLoading(false);
      }
    }
    loadPokemonList();
  }, []);

  // Fetches details for the selected Pokémon using its URL and stores it so the modal can display the Pokémon information.
  async function handleReadMore(url: string) {
    setError("");
    setLoading(true);

    try {
      const data = await fetchPokemonDetails(url);
      setSelectedPokemon(data);
    } catch {
      setError("Could not fetch pokemon details.");
    } finally {
      setLoading(false);
    }
  }

  // Closes the modal by resetting the selected Pokémon state to null.
  function closeModal() {
    setSelectedPokemon(null);
  }

  // Adds or removes a Pokémon from the favourites list, depending on whether it already exists in the list.
  function toggleFavourite(pokemon: PokemonDetails) {
    const pokemonIsFavourite = favouriteList.some(
      (fav) => fav.url === pokemon.url,
    );

    if (pokemonIsFavourite) {
      const newFavouriteList = favouriteList.filter(
        (fav) => fav.url !== pokemon.url,
      );
      setFavouriteList(newFavouriteList);
    } else {
      const newFavouriteList = [...favouriteList, pokemon];
      setFavouriteList(newFavouriteList);
    }
  }

  // Checks if the selected Pokémon is in the favourites list, used in the modal to display the correct heart icon.
  const isFavourite = favouriteList.some(
    (fav) => fav.url === selectedPokemon?.url,
  );

  // Variable used for deciding whether to show all Pokémon or only favourites.
  const displayedList = showFavourites ? favouriteList : pokemonList;

  return {
    displayedList,
    selectedPokemon,
    showFavourites,
    handleReadMore,
    closeModal,
    toggleFavourite,
    setShowFavourites,
    isFavourite,
    loading,
    error,
  };
}
