export const [ADD_ITEM, REMOVE_ITEM] = ['ADD_ITEM', 'REMOVE_ITEM'];

export const products = [
  {
    name: 'Beans',
    price: 50,
  },
  {
    name: 'Coke',
    price: 70,
  },
  {
    name: 'Oranges',
    price: 40,
  },
];

export const tabs = products.map((product) => product.name);
