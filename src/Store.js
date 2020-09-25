import React, { createContext, useReducer } from 'react';
import { reducer } from './reducers';

const initialState = {
  basket: [],
};

export const StoreContext = createContext(initialState);

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}
