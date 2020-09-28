import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { StoreProvider } from './Store';

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
      <App />
    </StoreProvider>
  );
});

describe('<App />', () => {
  it('should render without crashing', () => {
    const element = screen.getByTestId('app');
    expect(element).toBeInTheDocument();
  });
});
