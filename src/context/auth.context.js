import React, {
  createContext,
  useContext,
  useEffect,
  useReducer
} from 'react';
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

    case 'USER_ERROR':
      return {
        ...state,
        currentUser: null,
        isAuthenticated: false,
        errorMessage: payload
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

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('use auth context in auth provider');
  }
  return context;
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

  useEffect(() => {
    async function checkUserAuthenticated() {
      try {
        const user = await Auth.currentAuthenticatedUser();
        dispatch({ type: 'SET_USER', payload: user });
      } catch (error) {
        dispatch({
          type: 'USER_ERROR',
          payload: error.message || 'error occurred'
        });
      }
    }
    checkUserAuthenticated();
  }, []);

  return (
    <AuthContext.Provider
      value={{ state, dispatch, logout, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
