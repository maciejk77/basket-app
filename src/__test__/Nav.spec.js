import React from 'react';
import { render } from '@testing-library/react';
import Nav from '../components/Nav';

describe('<Nav />', () => {
  const tabs = ['First tab', 'Second tab', 'Third tab'];

  it('renders a container with a few buttons', () => {
    const { getByText } = render(<Nav tabs={tabs} />);

    for (const tab of tabs) {
      expect(getByText(tab)).toBeInTheDocument();
    }
  });
});
