import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import SubTotal from '../components/SubTotal';
import { StoreProvider } from '../Store';

describe('<SubTotal />', () => {
  const state = { basket: [], subTotal: 0 };
  const stateWithItems = {
    basket: ['Beans', 'Coke', 'Oranges'],
    subTotal: 160,
  };

  beforeEach(() => {
    render(
      <StoreProvider
        value={{
          state,
          dispatch: () => {},
        }}
      >
        <SubTotal {...state} />)
      </StoreProvider>
    );
  });

  afterEach(cleanup);

  it('should render without crashing', () => {
    const element = screen.getByTestId('sub-total');
    expect(element).toBeInTheDocument();
  });

  it('should show a container with correct label', () => {
    const element = screen.getByText(/Sub-total/i);
    expect(element).toBeInTheDocument();
  });

  it('should show a label £0.00 if no items in basket', () => {
    const element = screen.getByText(/N\/A/i);
    expect(element).toBeInTheDocument();
  });

  it('should show a correct sum if items are in the basket', () => {
    render(
      <StoreProvider
        value={{
          state: stateWithItems,
          dispatch: () => {},
        }}
      >
        <Discount {...state} />)
      </StoreProvider>
    );
    const element = screen.getByText(/£1.60/i);
    expect(element).toBeInTheDocument();
  });
  
  // should show current sum if item is REMOVED removed from basket
};);

