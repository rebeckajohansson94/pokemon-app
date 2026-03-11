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

// delat upp typerna för att anpassas till de olika API-anropen.
// använder & intersection  för att slå ihop typerna, detta för att följa DRY - så jag inte upprepar name & url i båda typerna
