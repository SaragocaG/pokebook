import { ADD_POKEMONS, SET_POKEMONS_COUNT } from './actionTypes';

export const addPokemons = (pokemons) => ({
  type: ADD_POKEMONS,
  payload: {
    pokemons
  }
});

export const setPokemonsCount = (count) => ({
  type: SET_POKEMONS_COUNT,
  payload: {
    count
  }
});
