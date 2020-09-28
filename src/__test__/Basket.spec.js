import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Basket from '../components/Basket';
import { StoreProvider } from '../Store';

describe('<Basket />', () => {
  const state = {
    basket: [],
    subTotal: 0,
  };
  beforeEach(() => {
    render(
      <StoreProvider
        value={{
          state,
          dispatch: () => {},
        }}
      >
        <Basket />)
      </StoreProvider>
    );
  });

  afterEach(cleanup);

  it('should render without crashing', () => {
    const element = screen.getByTestId('basket');
    expect(element).toBeInTheDocument();
  });
});

// should add items to basket - different scenarios
// TEST 1

// [] add Oranges
// => check Sub-total -> 0.40£ now
// =====> expect(screen.getByText(/£0.40/i).toBeInTheDocument(); , .toHaveLength(1)

// ['Oranges] add Beans
// => check Sub-total -> 0.90£ now
// =====> expect(screen.getByText(/£0.90/i).toBeInTheDocument(); , .toHaveLength(2)

// ['Oranges, 'Beans'] add Coke
// => check Sub-total -> 1.60£ now
// =====> expect(screen.getByText(/£1.60/i).toBeInTheDocument(); , .toHaveLength(3)

// ['Oranges, 'Beans', 'Coke'] remove Beans
// => check Sub-total -> 1.60£ now
// =====> expect(screen.getByText(/£1.60/i).toBeInTheDocument(); , .toHaveLength(3)
// => fireEvent to remove item
// => check Sub-total -> 1.10£ now
// =====> expect(screen.getByText(/£1.10/i).toBeInTheDocument(); , .toHaveLength(2)

// ... repeat the above with scenarios checking if adding at least 2xCokes, 3xBeans
// changed Sub-total, Total savings, Total to Pay
