import React, { useContext } from 'react';

import Nav from './components/Nav';
import { Store } from './Store';

const App = () => {
  const { state } = useContext(Store);
  const tabs = ['Beans', 'Coke', 'Oranges'];
  return (
    <div data-testid="app">
      <p>Basket App</p>
      <Nav tabs={tabs} />
    </div>
  );
};

export default App;
