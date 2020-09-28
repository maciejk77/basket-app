import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import SubTotal from '../components/SubTotal';
import { StoreProvider } from '../Store';

describe('<SubTotal />', () => {
  const state = { subTotal: 0 };

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
        <SubTotal {...state} />)
      </StoreProvider>
    );
  });

  afterEach(cleanup);

  it('should render without crashing', () => {
    const element = screen.getByTestId('sub-total');
    expect(element).toBeInTheDocument();
  });
});

// should render a container with 'Sub-total'
// should show £0.00 with empty basket
// should show correct sum with items in the basket
////////// add beans, coke, oranges?

// should call dispatch onClick
// should show curent sum if item is REMOVED removed from basket
////////// add beans, coke, oranges, remove oranges?
