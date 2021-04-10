import React, { createContext, useReducer } from "react";

export const AuthContext = createContext();

const initialState = {
  currentUser: null,
  isAuthenticated: true,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_USER":
      return { ...state, currentUser: payload, isAuthenticated: true };

    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
