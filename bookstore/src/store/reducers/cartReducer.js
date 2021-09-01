import { ADD_TO_CART, REMOVE_TO_CART } from "../actions/cartAction";
import { cartItems } from "../initialValues/cart";

const initialState = {
  cartItems: cartItems,
};

export default function cartReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_TO_CART:
      let book = state.cartItems.find((b) => b.book.id === payload.id);
      if (book) {
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { book: payload }],
        };
      }
    case REMOVE_TO_CART:
      return {
        ...state,
        cartItems: state.favorite.filter((j) => j.book.id !== payload.id),
      };

    default:
      return state;
  }
}
