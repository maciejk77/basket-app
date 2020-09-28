import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Basket from '../components/Basket';
import { StoreProvider } from '../Store';

describe('<Basket />', () => {
  beforeEach(() => {
    render(
      <StoreProvider
        value={{
          state: {
            basket: [],
            subTotal: 0,
          },
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

// should add items to basket
////// check length of items in the basket type
/////  check if the value sub total is correct, discount is correct, total to pay is correct
///// try diff scenarios

// repeat tests for various scenarious when removing items after adding
