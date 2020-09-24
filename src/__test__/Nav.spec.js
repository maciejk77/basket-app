import React from 'react';
import { render, screen } from '@testing-library/react';
import Nav from '../components/Nav';

describe('<Nav />', () => {
  const props = {
    tabs: ['First tab', 'Second tab', 'Third tab'],
  };

  beforeEach(() => {
    render(<Nav {...props} />);
  });

  it('should render without crashing', () => {
    const element = screen.getByTestId('nav');
    expect(element).toBeInTheDocument();
  });

  it('should render a container with a few buttons', () => {
    for (const tab of props.tabs) {
      expect(screen.getByText(tab)).toBeInTheDocument();
    }
  });
});
