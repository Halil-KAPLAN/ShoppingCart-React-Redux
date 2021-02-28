import { ADD_TO_CART, DECREASE_CART, INCREASE_CART, REMOVE_CART } from "./actionTypes";

export const addToCart = (book) => {
  return { type: ADD_TO_CART, payload: book };
};

export const increaseCart = (id) => {
  return { type: INCREASE_CART, payload: id };
};

export const decreaseCart = (id) => {
  return { type: DECREASE_CART, payload: id };
};

export const removeCart = (id) => {
  return { type: REMOVE_CART, payload: id };
};