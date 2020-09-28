import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import Button from '../components/Button';
import { StoreProvider } from '../Store';

describe('<Button />', () => {
  const props = {
    label: 'First Item',
  };

  const storeMock = {
    state: {
      basket: [],
      subTotal: 0,
    },
    dispatch: jest.fn(),
  };

  beforeEach(() => {
    render(
      <StoreProvider value={storeMock}>
        <Button {...props} />)
      </StoreProvider>
    );
  });

  afterEach(cleanup);

  it('should render without crashing', () => {
    const element = screen.getByTestId('button');
    expect(element).toBeInTheDocument();
  });

  it('should render a button with label', () => {
    const element = screen.getByText(props.label);
    expect(element).toBeInTheDocument();
  });

  it('should call dispatch on click', () => {
    const element = screen.getByText(props.label);
    fireEvent.click(element);
    // console.log(screen.debug());
    //expect(storeMock.dispatch.calls.length).toEqual(1);
    expect(storeMock.dispatch).toHaveBeenCalled();
  });
});
