import { combineReducers } from 'redux';
import darkMode from './darkMode';
import pokemons from './pokemons';

const reducers = combineReducers({
  darkMode,
  pokemons,
});

export default reducers;