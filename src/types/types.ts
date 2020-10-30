export interface TypePokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  specie: string;
  picture: string;
  base_experience: number;
  abilities: TypeAbility[];
  stats: TypeStats[];
}

export interface TypeAbility {
  url: string;
  name: string;
}

export interface TypeStats {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string
  }
}

export interface TypeSpecie {
  id: number;
  name: string;
  color: {
    name: string;
  }
}

export interface PokemonListProps {
  list: TypePokemon[];
  count: number;
}
