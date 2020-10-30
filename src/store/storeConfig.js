import { createStore, combineReducers } from 'redux';
import darkModeReducer from './reducers/darkMode';
import pokemonsReducer from './reducers/pokemons';

const reducers = combineReducers({
  darkMode: darkModeReducer,
  pokemons: pokemonsReducer,
});

const storeConfig = () => createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default storeConfig;
