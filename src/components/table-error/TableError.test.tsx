import React from 'react';
import { render, screen } from '@testing-library/react';
import TableError from './TableError';

describe('TableError', () => {
  it('should render the error message', () => {
    const errorMessage = 'Something went wrong';
    render(
      <table>
        <TableError message={errorMessage} />
      </table>,
    );
    const errorElement = screen.getByText(errorMessage);
    expect(errorElement).toBeInTheDocument();
  });
});
