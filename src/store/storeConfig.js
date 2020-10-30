import { createStore, combineReducers } from 'redux';
import darkModeReducer from './reducers/darkMode';

const reducers = combineReducers({
  darkMode: darkModeReducer
});

const storeConfig = () => createStore(reducers);

export default storeConfig;
