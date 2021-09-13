import {
  createContext,
  useState,
  useContext,
  useEffect,
  useReducer,
} from "react";

const initialUserState = {
  isAdmin: false,
  username: "",
  user: null,
  cartId: "",
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userStateReducer, initialUserState);

  const isAdmin = localStorage.getItem("isAdmin");
  const username = localStorage.getItem("username");
  const user = localStorage.getItem("user");
  const cartId = localStorage.getItem("cartId");
  useEffect(() => {
    dispatch({ type: "SET_IS_ADMIN", payload: isAdmin === "true" });
    dispatch({ type: "SET_USERNAME", payload: username });
    dispatch({ type: "SET_USER", payload: user });
    dispatch({ type: "SET_CART_ID", payload: cartId });
  }, []);
  // state i yazdırıyorum burada
  //console.log(state, "state");
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
    case "SET_USERNAME":
      newState = { ...state, username: action.payload };
      break;
    case "SET_USER":
      newState = { ...state, user: action.payload };
      break;
    case "SET_CART_ID":
      newState = { ...state, cartId: action.payload };
      break;
    default:
      break;
  }
  return newState;
}

const UserContext = createContext({ state: initialUserState });

export const useUser = () => useContext(UserContext);
