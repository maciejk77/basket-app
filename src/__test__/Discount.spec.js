import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Discount from '../components/Discount';
import { StoreProvider } from '../Store';

describe('<Discount />', () => {
  const state = { basket: [], subTotal: 0 };

  beforeEach(() => {
    render(
      <StoreProvider
        value={{
          state,
          dispatch: () => {},
        }}
      >
        <Discount {...state} />)
      </StoreProvider>
    );
  });

  afterEach(cleanup);

  it('should render without crashing', () => {
    const element = screen.getByTestId('discount');
    expect(element).toBeInTheDocument();
  });

  it('should show a container with correct label', () => {
    const element = screen.getByText(/Total savings/i);
    expect(element).toBeInTheDocument();
  });

  it('should show a label N/A if no items in basket', () => {
    const element = screen.getByText(/N\/A/i);
    expect(element).toBeInTheDocument();
  });

  it('should show a correct sum e.g. £1.60 if items are in the basket', () => {
    render(
      <StoreProvider
        value={{
          state,
          dispatch: () => {},
        }}
      >
        <Discount {...state} />)
      </StoreProvider>
    );
    const element = screen.getByText(/£1.60/i);
    expect(element).toBeInTheDocument();
  });

  it('should show a beans discount', () => {
    render(
      <StoreProvider
        value={{
          state,
          dispatch: () => {},
        }}
      >
        <Discount {...state} />)
      </StoreProvider>
    );
    const element = screen.getByText(/£1.50/i);
    expect(element).toBeInTheDocument();
  });

  it('should show a coke discount', () => {
    render(
      <StoreProvider
        value={{
          state,
          dispatch: () => {},
        }}
      >
        <Discount {...state} />)
      </StoreProvider>
    );
    const element = screen.getByText(/£1.40/i);
    expect(element).toBeInTheDocument();
  });
});
