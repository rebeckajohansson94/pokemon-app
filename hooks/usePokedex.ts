import { fetchPokemon, fetchPokemonDetails } from "@/services/api";
import type { PokemonDetails, PokemonListItem } from "@/types/pokemon";
import { useEffect, useState } from "react";

// custom hook som samlar state och logik för pokedex-vyn
export default function usePokedex() {
  const [pokemonList, setPokemonList] = useState<PokemonListItem[]>([]); // lista med alla pokémons som hämtas från api'et.
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonDetails | null>(
    null,
  ); // den pokémon som visas i modalen, modalen visas om objekt finns - annars inte
  const [showFavourites, setShowFavourites] = useState(false); // state som togglar vyn mellan alla pokemons och favoritlistan
  const [favouriteList, setFavouriteList] = useState<PokemonListItem[]>([]); // lista med pokémons som användaren markerat som favoriter.
  const [loading, setLoading] = useState(false); // visar om data håller på att hämtas.
  const [error, setError] = useState(""); // sparar felmeddelande om ett api-anrop misslyckas.

  // hämtar en lista av pokémons när sidan mountas. listan sparas i pokemonList som sedan används i displayedList
  useEffect(() => {
    async function loadPokemonList() {
      setLoading(true);
      setError("");

      try {
        const data = await fetchPokemon();
        setPokemonList(data);
      } catch {
        setError("Could not load pokemonlist.");
      } finally {
        setLoading(false);
      }
    }
    loadPokemonList();
  }, []);

  // hämtar detaljer för den pokémon som blivit klickad på, och sparar den i selectedPokemon så att modalen kan visa rätt innehåll.
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

  function closeModal() {
    setSelectedPokemon(null);
  }

  // lägger till eller tar bort en pokémon från favoritlistan, beroende på om den redan finns där.
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

  // variabel som blir true om pokémonen som visas i modalen redan finns i favoritlistan. (används för stylingen, att visa rätt hjärta)
  const isFavourite = favouriteList.some(
    (fav) => fav.url === selectedPokemon?.url,
  );

  // bestämmer vilken lista som ska visas i ui't, alla pokémons eller bara favoriter.
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
