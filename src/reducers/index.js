import {
  ADD_TO_CART,
  DECREASE_CART,
  INCREASE_CART,
  REMOVE_CART,
} from "../actions/actionTypes";
import { data } from "../data";

const INITIAL_STATE = {
  bookList: data,
  cart: [],
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: state.cart.find((cartItem) => cartItem.id === action.payload.id)
          ? state.cart.map((cartItem) =>
              cartItem.id === action.payload.id
                ? { ...cartItem, count: cartItem.count + 1 }
                : cartItem
            )
          : [...state.cart, { ...action.payload, count: 1 }],
      };
    case INCREASE_CART:
      return {
        ...state,
        cart: state.cart.map((cartItem) =>
          cartItem.id === action.payload
            ? { ...cartItem, count: cartItem.count + 1 }
            : cartItem
        ),
      };
    case DECREASE_CART:
      return {
        ...state,
        cart: state.cart.map((cartItem) =>
          cartItem.id === action.payload
            ? {
                ...cartItem,
                count: cartItem.count > 1 ? cartItem.count - 1 : 1,
              }
            : cartItem
        ),
      };

    case REMOVE_CART:
      return {
        ...state,
        cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
      };

    default:
      return state;
  }

  return state;
};
