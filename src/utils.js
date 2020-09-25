import { products } from './constants';

export const getItemPrice = (item) =>
  products.filter((p) => p.name === item)[0].price;

export const mapBasketItems = (basket) => {
  const itemsMap = {};
  basket.map((item) =>
    itemsMap[item] ? itemsMap[item]++ : (itemsMap[item] = 1)
  );

  return itemsMap;
};

export const getSubTotal = (mappedBasket) => {
  return Object.keys(mappedBasket).reduce((total, item) => {
    return total + mappedBasket[item] * getItemPrice(item);
  }, 0);
};
