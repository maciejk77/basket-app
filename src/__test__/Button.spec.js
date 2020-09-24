import React from 'react';
import { render } from '@testing-library/react';
import Button from '../components/Button';

describe('<Button />', () => {
  const label = 'First Item';

  it('renders a button with label', () => {
    const { getByText } = render(<Button label={label} />);
    const linkElement = getByText(label);
    expect(linkElement).toBeInTheDocument();
  });
});
