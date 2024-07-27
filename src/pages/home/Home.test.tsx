import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';
import HomeTable from './components/HomeTable';

jest.mock('./components/HomeTable');

describe('Home', () => {
  it('should render HomeTable component', () => {
    (HomeTable as jest.Mock).mockImplementation(() => (
      <div>Mocked HomeTable</div>
    ));

    const { getByText } = render(<Home />);

    expect(getByText('Mocked HomeTable')).toBeInTheDocument();
  });
});
