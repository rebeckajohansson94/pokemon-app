export type PokemonListItem = {
  name: string;
  url: string;
};

export type PokemonDetails = {
  id: number;
  name: string;
  image: string;
  type: string;
  height: number;
  weight: number;
  hp: number;
  ability: string;
  url: string;
};

// delat upp typerna för att anpassas till de olika API-anropen.
