import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Home from '@pages/home/Home';

jest.mock('@pages/home/Home');

describe('App', () => {
  it('should render Home component', () => {
    (Home as jest.Mock).mockImplementation(() => <div>Mocked Home</div>);

    const { getByText } = render(<App />);

    expect(getByText('Mocked Home')).toBeInTheDocument();
  });
});
