export type PokemonListItem = {
  name: string;
  url: string;
};

export type PokemonDetails = PokemonListItem & {
  id: number;
  image: string;
  type: string;
  height: number;
  weight: number;
  hp: number;
  ability: string;
};

// Types used to represent Pokémon data from different API responses across the app. Uses an intersection to reuse shared properties.
