import { fetchPokemon, fetchPokemonDetails } from "@/services/api";
import type { PokemonDetails, PokemonListItem } from "@/types/pokemon";
import { useEffect, useState } from "react";

// custom hook som samlar all state + logik för pokedex och dess children
export default function usePokedex() {
  const [pokemonList, setPokemonList] = useState<PokemonListItem[]>([]); // state som sparar pokemons i lista
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonDetails | null>( //state som hanterar modalen
    null,
  );
  const [showFavourites, setShowFavourites] = useState(false); // state som togglar vyn mellan alla pokemons och liked-listan
  const [favouriteList, setFavouriteList] = useState<PokemonListItem[]>([]); // state som sparar likeade pokemons i lista
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // hämtar en lista av pokemons vid mount av sidan. async-funktionen definieras inuti useEffect eftersom den inte behöver nås utifrån utan körs bara vid mount. listan sparas i pokemonList-state som sedan används i displayedList
  useEffect(() => {
    async function loadPokemonList() {
      setLoading(true);
      setError("");

      try {
        const data = await fetchPokemon();
        setPokemonList(data);
      } catch {
        setError("Could not fetch pokemonlist.");
      } finally {
        setLoading(false);
      }
    }
    loadPokemonList();
  }, []);

  // får in url från PokedexList via "read more", skickar den till fetchPokemonDetails och sparar svaret i selectedPokemon. när selectedPokemon får ett värde öppnas modalen
  async function handleReadMore(url: string) {
    setError("");
    setLoading(true);

    try {
      const data = await fetchPokemonDetails(url);
      setSelectedPokemon(data);
    } catch {
      setError("Could not fetch pokemondetails.");
    } finally {
      setLoading(false);
    }
  }

  // stänger modalen genom att sätta selectedPokemon till null
  function closeModal() {
    setSelectedPokemon(null);
  }

  // togglar favourites - kollar först om pokemonen redan är sparad (för att undvika dubletter). om den finns: ta bort. om den inte finns: lägg till i arrayen
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

  // variabel som används bara för modalen, för att veta om den valda pokemonen redan är sparad.
  const isFavourite = favouriteList.some(
    (fav) => fav.url === selectedPokemon?.url,
  );

  // bestämmer vilken lista som visas - favourites om showFavourites är true, annars pokemonList
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
