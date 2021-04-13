import React, { createContext, useReducer } from 'react';
import { Auth } from 'aws-amplify';

export const AuthContext = createContext();

var values = [],
  keys = Object.keys(localStorage),
  i = keys.length;

while (i--) {
  values.push(localStorage.getItem(keys[i]));
}

const initialState = {
  currentUser: null,
  isAuthenticated: !!values[0]
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'LOAD_USER':
      return {
        ...state,
        isAuthenticated: !!payload
      };
    case 'SET_USER':
      return {
        ...state,
        currentUser: payload,
        isAuthenticated: !!payload
      };

    case 'LOG_OUT':
      return {
        ...state,
        currentUser: null,
        isAuthenticated: false
      };

    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const isAuthenticated = () => {
    return state.isAuthenticated;
  };

  const logout = async () => {
    await Auth.signOut();
    dispatch({ type: 'LOG_OUT' });
  };

  return (
    <AuthContext.Provider
      value={{ state, dispatch, logout, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
