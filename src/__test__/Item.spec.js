import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Item from '../components/Item';

describe('<Item />', () => {
  const props = {
    item: 'First Item',
  };

  beforeEach(() => {
    render(<Item {...props} />);
  });

  afterEach(cleanup);

  it('should render without crashing', () => {
    const element = screen.getByTestId('item');
    expect(element).toBeInTheDocument();
  });

  it('should render an item with label', () => {
    const element = screen.getByText(props.item);
    expect(element).toBeInTheDocument();
  });
});
