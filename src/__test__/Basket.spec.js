import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Basket from '../components/Basket';
import { StoreProvider } from '../Store';

describe('<Basket />', () => {
  let state;

  beforeEach(() => {
    state = {
      basket: [],
    };

    render(
      <StoreProvider value={state.basket}>
        <Basket />
      </StoreProvider>
    );
  });

  afterEach(cleanup);

  it('should render without crashing', () => {
    const element = screen.getByTestId('basket');
    expect(element).toBeInTheDocument();
  });

  it('should render empty basket', () => {
    for (const item of state.basket) {
      const element = screen.getAllByText(item);
      expect(element).toBeInTheDocument();
    }
  });

  it('should render basket items', () => {
    state = {
      basket: ['Foo', 'Bar', 'Baz'],
    };

    for (const item of state.basket) {
      const element = screen.getByTextId(item);
      expect(element).toBeInTheDocument();
    }
  });

  it('should add items to the basket', () => {});
});
