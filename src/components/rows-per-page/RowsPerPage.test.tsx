import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RowsPerPage from './RowsPerPage';

describe('RowsPerPage', () => {
  const defaultProps = {
    rowsPerPage: 10,
    handleRowsPerPage: jest.fn(),
  };

  it('should render the component with default rowsPerPage value', () => {
    render(<RowsPerPage {...defaultProps} />);
    const selectElement = screen.getByLabelText(
      'Rows per page:',
    ) as HTMLSelectElement;
    expect(selectElement).toBeInTheDocument();
    expect(selectElement.value).toBe('10');
  });

  it('should call handleRowsPerPage when a new value is selected', () => {
    render(<RowsPerPage {...defaultProps} />);
    const selectElement = screen.getByLabelText('Rows per page:');
    fireEvent.change(selectElement, { target: { value: '20' } });
    expect(defaultProps.handleRowsPerPage).toHaveBeenCalledWith(20);
  });

  it('should display all options correctly', () => {
    render(<RowsPerPage {...defaultProps} />);
    const optionElements = screen.getAllByRole('option');
    const optionValues = optionElements.map(
      (option) => (option as HTMLOptionElement).value,
    );
    expect(optionValues).toEqual(['10', '20', '50']);
  });
});
