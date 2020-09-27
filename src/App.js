import React, { useContext } from 'react';
import Nav from './components/Nav';
import Basket from './components/Basket';
import SubTotal from './components/SubTotal';
import Discount from './components/Discount';
import TotalPay from './components/TotalPay';
import { tabs } from './constants';
import { getDiscounts, totalSavings } from '../src/utils';
import { StoreContext } from './Store';

const App = () => {
  const { state } = useContext(StoreContext);
  const discountedItems = getDiscounts(state.basket);
  const discount = totalSavings(discountedItems);

  return (
    <div data-testid="app">
      <Nav tabs={tabs} />
      <Basket />
      <SubTotal />
      <Discount />
      <TotalPay totalSavings={discount} />
    </div>
  );
};

export default App;
