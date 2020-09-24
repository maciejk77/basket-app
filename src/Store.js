import React, { createContext, useReducer } from 'react';

const initialState = {
  basket: [],
};

export const Store = createContext(initialState);

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(null, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
}
