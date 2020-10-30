export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  specie: string;
  picture: string;
  base_experience: number;
}

export interface Ability {
  id: number;
  name: string;
}

export interface Specie {
  id: number;
  name: string;
  color: {
    name: string;
  }
}

