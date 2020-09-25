import React, { useContext } from 'react';
import Item from '../Item';
import { StoreContext } from '../../Store';
import { getItemPrice } from '../../utils';

const Basket = () => {
  const { state } = useContext(StoreContext);
  console.log(state);

  return (
    <div data-testid="basket">
      {state.basket.map((itemName, index) => {
        const price = getItemPrice(itemName);
        return <Item name={itemName} price={price} key={index} index={index} />;
      })}
    </div>
  );
};

export default Basket;
