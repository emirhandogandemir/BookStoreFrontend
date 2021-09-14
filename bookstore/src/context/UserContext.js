import {
  createContext,
  useState,
  useContext,
  useEffect,
  useReducer,
} from "react";
import UserService from "../services/userService";
const initialUserState = {
  isAdmin: false,
  authenticatedUser: null,
  cartId: "",
};
const UserContext = createContext({ state: initialUserState });

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userStateReducer, initialUserState);

  const isAdmin = localStorage.getItem("isAdmin");
  const username = localStorage.getItem("username");

  useEffect(() => {
    if (username) {
      UserService.getByUsername(localStorageUsername()).then((result) => {
        dispatch({ type: "SET_USER", payload: result.data });
        dispatch({
          type: "SET_IS_ADMIN",
          payload: result.data.roles.some((role) => role.name === "ADMIN"),
        });
      });
    }
  }, [username]);
  // state i yazdırıyorum burada
  console.log(state, "state");

  return (
    <UserContext.Provider value={[state, dispatch]}>
      {children}
    </UserContext.Provider>
  );
};

function userStateReducer(state = initialUserState, action) {
  let newState = state;
  switch (action.type) {
    case "SET_IS_ADMIN":
      newState = { ...state, isAdmin: action.payload };
      break;
    case "SET_USER":
      newState = { ...state, authenticatedUser: action.payload };
      break;
    case "SET_CART_ID":
      newState = { ...state, cartId: action.payload };
      break;
    default:
      break;
  }
  return newState;
}
export function useUserContext() {
  return useContext(UserContext);
}

function localStorageUsername() {
  return localStorage.getItem("username");
}
