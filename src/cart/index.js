import * as types from "./types";
import * as cartIconActions from './actions';

const initialState = true;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_CART: {
      return state === true ? false : true;
    }

    default: {
      return state;
    }
  }
};
export {
    cartIconActions
}
export default reducer;
