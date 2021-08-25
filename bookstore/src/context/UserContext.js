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
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userStateReducer, initialUserState);

  const isAdmin = localStorage.getItem("isAdmin");
  const username = localStorage.getItem("username");
  useEffect(() => {
    dispatch({ type: "SET_IS_ADMIN", payload: isAdmin === "true" });
    dispatch({ type: "SET_USERNAME", payload: username });
  }, []);
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

    case "SET_USERNAME":
      newState = { ...state, username: action.payload };
      break;

    default:
      break;
  }
  return newState;
}

const UserContext = createContext({ state: initialUserState });

export const useUser = () => useContext(UserContext);
