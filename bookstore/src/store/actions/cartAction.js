export const ADD_TO_CART = "ADD_TO_CART";

export const REMOVE_TO_CART = "REMOVE_TO_CART";

export function addtoCart(book) {
  return {
    type: ADD_TO_CART,
    payload: book,
  };
}

export function removeFromCart(book) {
  return {
    type: REMOVE_TO_CART,
    payload: book,
  };
}
