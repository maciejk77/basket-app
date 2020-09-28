import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import Item from '../components/Item';
import { StoreProvider } from '../Store';

describe('<Item />', () => {
  const state = {
    basket: [],
    subTotal: 0,
  };
  const props = {
    name: 'Foo',
    price: 100,
  };
  const storeMock = {
    state,
    dispatch: jest.fn(),
  };

  beforeEach(() => {
    render(
      <StoreProvider
        value={{
          state,
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

  it('should render an item with label', () => {
    const element = screen.getByText(props.name);
    expect(element).toBeInTheDocument();
  });

  it('should render with item unit price', () => {
    const element = screen.getByText(props.price);
    expect(element).toBeInTheDocument();
  });

  it('should call dispatch when clicking on remove', () => {
    const element = screen.getByTestId('item-remove');
    fireEvent.click(element);
    // console.log(screen.debug());
    //expect(storeMock.dispatch.calls.length).toEqual(1);
    expect(storeMock.dispatch).toHaveBeenCalled();
  });
});
