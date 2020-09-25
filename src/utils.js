import { products } from './constants';

export const getItemPrice = (item) =>
  products.filter((p) => p.name === item)[0].price;
