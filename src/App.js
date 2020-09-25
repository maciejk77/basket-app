import React from 'react';
import Nav from './components/Nav';
import Basket from './components/Basket';
import SubTotal from './components/SubTotal';
import { tabs } from './constants';

const App = () => {
  return (
    <div data-testid="app">
      <Nav tabs={tabs} />
      <Basket />
      <SubTotal />
    </div>
  );
};

export default App;
