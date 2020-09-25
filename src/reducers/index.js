import { ADD_ITEM, REMOVE_ITEM } from '../constants';

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, basket: [...state.basket, action.payload] };
    case REMOVE_ITEM:
      return {
        ...state,
        basket: [...state.basket.filter((_, idx) => idx !== action.payload)],
      };
    default:
      return state;
  }
};
