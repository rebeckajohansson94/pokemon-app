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
  const [favourites, setFavourites] = useState<PokemonListItem[]>([]); // state som sparar likeade pokemons i lista

  // hämtar en lista av pokemons vid mount av sidan. async-funktionen definieras inuti useEffect eftersom den inte behöver nås utifrån utan körs bara vid mount. listan sparas i pokemonList-state som sedan används i displayedList
  useEffect(() => {
    async function loadPokemonList() {
      const data = await fetchPokemon();
      setPokemonList(data);
    }
    loadPokemonList();
  }, []);

  // får in url från PokedexList via "read more", skickar den till fetchPokemonDetails och sparar svaret i selectedPokemon. när selectedPokemon får ett värde öppnas modalen
  async function handleReadMore(url: string) {
    const data = await fetchPokemonDetails(url);
    setSelectedPokemon(data);
  }

  // stänger modalen genom att sätta selectedPokemon till null
  function handleOnClose() {
    setSelectedPokemon(null);
  }

  // togglar favourites - kollar först om pokemonen redan är sparad (för att undvika dubletter). om den finns: ta bort. om den inte finns: lägg till i arrayen
  function handleFavourite(pokemon: PokemonDetails) {
    const isAlreadyFavourite = favourites.find(
      (fav) => fav.url === pokemon.url,
    );

    setFavourites(
      isAlreadyFavourite
        ? favourites.filter((fav) => fav.url !== pokemon.url)
        : [...favourites, pokemon],
    );
  }
  // bestämmer vilken lista som visas - favourites om showFavourites är true, annars pokemonList
  const displayedList = showFavourites ? favourites : pokemonList;

  return {
    displayedList,
    selectedPokemon,
    showFavourites,
    favourites,
    handleReadMore,
    handleOnClose,
    handleFavourite,
    setShowFavourites,
  };
}
