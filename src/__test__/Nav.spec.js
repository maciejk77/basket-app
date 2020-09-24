import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Nav from '../components/Nav';

describe('<Nav />', () => {
  const props = {
    tabs: ['First tab', 'Second tab', 'Third tab'],
  };

  beforeEach(() => {
    render(<Nav {...props} />);
  });

  afterEach(cleanup);

  it('should render without crashing', () => {
    const element = screen.getByTestId('nav');
    expect(element).toBeInTheDocument();
  });

  it('should render a container with buttons and labels on them', () => {
    expect(screen.getAllByTestId('button')).toHaveLength(3);
    for (const tab of props.tabs) {
      const element = screen.getByText(tab);
      expect(element).toBeInTheDocument();
    }
  });
});
