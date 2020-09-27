export const [ADD_ITEM, REMOVE_ITEM] = ['ADD_ITEM', 'REMOVE_ITEM'];

export const products = [
  {
    name: 'Beans',
    price: 50,
    discount: {
      promoLabel: 'Beans 3 for 2',
      itemsCount: 3,
      value: 50,
    },
  },
  {
    name: 'Coke',
    price: 70,
    discount: {
      promoLabel: 'Coke 2 for £1',
      itemsCount: 2,
      value: 40,
    },
  },
  {
    name: 'Oranges',
    price: 40,
  },
];

export const tabs = products.map((product) => product.name);
