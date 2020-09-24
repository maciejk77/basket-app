import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  it('renders basket app text', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Basket App/i);
    expect(linkElement).toBeInTheDocument();
  });
});
