import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Item from '../components/Item';
import { StoreProvider } from '../Store';

describe('<Item />', () => {
  const props = {
    name: 'Foo',
    price: 100,
  };

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
        <Item {...props} />)
      </StoreProvider>
    );
  });

  afterEach(cleanup);

  it('should render without crashing', () => {
    const element = screen.getByTestId('item');
    expect(element).toBeInTheDocument();
  });

  it('should render an item with label', () => {
    const element = screen.getByText(props.name);
    expect(element).toBeInTheDocument();
  });
});

// should render with item unit price
// should call dispatch onClick
