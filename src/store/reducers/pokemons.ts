import { ADD_POKEMONS, SET_POKEMONS_COUNT } from '../actions/actionTypes';
import { PokemonListProps } from '../../types/types';

const initialState: PokemonListProps = {
  list: [],
  count: 0,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
  case ADD_POKEMONS:
    return {
      ...state,
      list: [
        ...state.list,
        ...action.payload.pokemons
      ],
    };
    break;
  case SET_POKEMONS_COUNT:
    return {
      ...state,
      count: action.payload.count,
    };
    break;

  default:
    return state;
  }
};

export default reducer;
