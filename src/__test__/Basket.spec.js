import React from 'react';
import {
  render,
  screen,
  cleanup,
  fireEvent,
  getByText,
  getAllByText,
  getByTestId,
} from '@testing-library/react';
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

  // test('should add and remove items to the basket giving the correct sums', async () => {

  //   // targeting correct elements by test-id, text ('Oranges)
  //   // values should be replaced to test-id (sums may not be unique)

  //   // Click 'Oranges'
  //   fireEvent.click(screen.getByText('Oranges'));
  //   fireEvent.click(screen.getByText('Oranges'));
  //   fireEvent.click(screen.getByText('Oranges'));
  //   expect(await getAllByText('item')).toHaveLength(3);
  //   expect(screen.getByText(/£1.20/i)).toBeInTheDocument(); // sub-total value
  //   expect(screen.getByText(/N\/A/i)).toBeInTheDocument(); // discount value
  //   expect(screen.getByText(/£1.20/i)).toBeInTheDocument(); // total to pay value

  //   // Click 'Oranges', 'Beans', 'Beans', 'Coke'
  //   fireEvent.click(screen.getByText('Oranges'));
  //   fireEvent.click(screen.getByText('Beans'));
  //   fireEvent.click(screen.getByText('Beans'));
  //   expect(await getAllByText('item')).toHaveLength(7);
  //   expect(screen.getByText(/£3.30/i)).toBeInTheDocument(); // sub-total value
  //   expect(screen.getByText(/N\/A/i)).toBeInTheDocument(); // discount value
  //   expect(screen.getByText(/£3.30/i)).toBeInTheDocument(); // total to pay value

  //   // Click 'Coke'
  //   fireEvent.click(screen.getByText('Coke'));
  //   expect(await getAllByText('item')).toHaveLength(8);
  //   expect(screen.getByText(/£3.30/i)).toBeInTheDocument(); // sub-total value
  //   expect(screen.getByText(/0.40/i)).toBeInTheDocument(); // discount value
  //   expect(screen.getByText(/£3.60/i)).toBeInTheDocument(); // total to pay value

  //   // Click 'Beans'
  //   fireEvent.click(screen.getByText('Beans'));
  //   expect(await getAllByText('item')).toHaveLength(9);
  //   expect(screen.getByText(/£4.50/i)).toBeInTheDocument(); // sub-total value
  //   expect(screen.getByText(/0.90/i)).toBeInTheDocument(); // discount value
  //   expect(screen.getByText(/£3.60/i)).toBeInTheDocument(); // total to pay value

  //   // Click remove next to 'Coke'
  //   fireEvent.click(screen.getByText('... X next to Coke'));
  //   expect(await getAllByText('item')).toHaveLength(8);
  //   expect(screen.getByText(/£3.80/i)).toBeInTheDocument(); // sub-total value
  //   expect(screen.getByText(/0.50/i)).toBeInTheDocument(); // discount value
  //   expect(screen.getByText(/£3.30/i)).toBeInTheDocument(); // total to pay value

  //   // Click remove next to 'Beans'
  //   fireEvent.click(screen.getByText('... X next to Beans'));
  //   expect(await getAllByText('item')).toHaveLength(7);
  //   expect(screen.getByText(/£3.30/i)).toBeInTheDocument(); // sub-total value
  //   expect(screen.getByText(/N\/A/i)).toBeInTheDocument(); // discount value
  //   expect(screen.getByText(/£3.30/i)).toBeInTheDocument(); // total to pay value
  // });
});
