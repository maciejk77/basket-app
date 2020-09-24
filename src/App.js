import React, { Fragment, useContext } from 'react';
import Button from './components/Button';
import Nav from './components/Nav';
import { Store } from './Store';

const App = () => {
  const { state } = useContext(Store);
  return (
    <>
      <p>Basket App</p>
      <Nav>
        <Button label="Coke" />
        <Button label="Beans" />
        <Button label="Oranges" />
      </Nav>
    </>
  );
};

export default App;
