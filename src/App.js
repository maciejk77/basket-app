import React from 'react';
import Nav from './components/Nav';
import Basket from './components/Basket';

const App = () => {
  const tabs = ['Beans', 'Coke', 'Oranges'];

  return (
    <div data-testid="app">
      <Nav tabs={tabs} />
      <Basket />
    </div>
  );
};

export default App;
