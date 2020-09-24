import React, { useContext } from 'react';
import Item from '../Item';
import { StoreContext } from '../../Store';

const Basket = () => {
  const { state } = useContext(StoreContext);

  return (
    <div data-testid="basket">
      {state.basket.map((item, index) => (
        <Item item={item} key={index} />
      ))}
    </div>
  );
};

export default Basket;
