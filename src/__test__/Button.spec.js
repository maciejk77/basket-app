import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Button from '../components/Button';

describe('<Button />', () => {
  const props = {
    label: 'First Item',
  };

  beforeEach(() => {
    render(<Button {...props} />);
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
});
