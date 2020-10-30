import { TOGGLE_DARK_MODE } from '../actions/actionTypes';

const initialState = false;

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case TOGGLE_DARK_MODE:
    return !state;
  default:
    return state;
  }
};

export default reducer;
