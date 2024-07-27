import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('Index', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    render(<App />, { container: div });
  });
});
