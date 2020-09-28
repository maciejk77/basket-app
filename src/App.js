import React, { useContext } from 'react';
import Nav from './components/Nav';
import Basket from './components/Basket';
import SubTotal from './components/SubTotal';
import Discount from './components/Discount';
import TotalPay from './components/TotalPay';
import { tabs } from './constants';
import { getDiscounts, totalSavings } from '../src/utils';
import { StoreContext } from './Store';
import { ThemeProvider } from 'react-jss';
import { theme } from './theme';

const App = () => {
  const { state } = useContext(StoreContext);
  const discountedItems = getDiscounts(state.basket);
  const discount = totalSavings(discountedItems);

  return (
    <ThemeProvider theme={theme} data-testid="app">
      <Nav tabs={tabs} />
      <Basket />
      <SubTotal />
      <Discount />
      <TotalPay totalSavings={discount} />
    </ThemeProvider>
  );
};

export default App;
