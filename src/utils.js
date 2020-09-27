import { products } from './constants';

export const toDecimal = (number) => (Number(number) / 100).toFixed(2);

export const getItemPrice = (item) =>
  products.filter((p) => p.name === item)[0].price;

export const mapBasketItems = (basket) => {
  const itemsMap = {};
  basket.map((item) =>
    itemsMap[item] ? itemsMap[item]++ : (itemsMap[item] = 1)
  );

  return itemsMap;
};

export const getDiscounts = (basket) => {
  const discountedProducts = products.filter((p) => p.discount);
  const mappedItems = mapBasketItems(basket);
  const basketKeys = Object.keys(mappedItems);

  const discountedBasketKeys = basketKeys.filter(
    (bk) => products.filter((p) => p.name === bk)[0].discount !== undefined
  );

  return discountedBasketKeys.map((item) => {
    const itemCount = mappedItems[item];
    const discountItem = discountedProducts.filter((p) => p.name === item)[0]
      .discount;
    const itemRule = discountItem.itemsCount;
    const discount = discountItem.value;
    const promoLabel = discountItem.promoLabel;

    const hasRemainder = itemCount % itemRule === 0;
    const divisionResult = itemCount / itemRule;
    const itemDiscount = hasRemainder
      ? divisionResult * discount
      : Math.floor(divisionResult) * discount;

    return { promoLabel, itemDiscount };
  });
};

export const totalSavings = (discountedItems) =>
  discountedItems.length &&
  discountedItems.map((el) => el.itemDiscount).reduce((acc, num) => acc + num);
