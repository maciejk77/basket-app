import React, { createContext, useReducer } from 'react';

const initialState = {
  basket: [],
};

export const StoreContext = createContext(initialState);

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(null, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}
