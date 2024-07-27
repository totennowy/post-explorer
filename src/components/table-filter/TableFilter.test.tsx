import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TableFilter from './TableFilter';
import { ModelTableFilter } from './types/modelTableFilter';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
];

const onChange = jest.fn();

const defaultProps: ModelTableFilter = {
  options,
  onChange,
  placeholder: 'Filter options',
};

test('renders filter icon', () => {
  render(<TableFilter {...defaultProps} />);
  expect(screen.getByLabelText('filter icon')).toBeInTheDocument();
});

test('toggles filter options', () => {
  render(<TableFilter {...defaultProps} />);
  const button = screen.getByRole('button');
  fireEvent.click(button);
  expect(screen.getByText('Filter options')).toBeInTheDocument();
  fireEvent.click(button);
  expect(screen.queryByText('Filter options')).not.toBeInTheDocument();
});

test('checks and unchecks options', () => {
  render(<TableFilter {...defaultProps} />);
  const button = screen.getByRole('button');
  fireEvent.click(button);

  const option1 = screen.getByLabelText('Option 1');
  const option2 = screen.getByLabelText('Option 2');

  fireEvent.click(option1);
  expect(option1).toBeChecked();
  expect(onChange).toHaveBeenCalledWith(['option1']);

  fireEvent.click(option2);
  expect(option2).toBeChecked();
  expect(onChange).toHaveBeenCalledWith(['option1', 'option2']);

  fireEvent.click(option1);
  expect(option1).not.toBeChecked();
  expect(onChange).toHaveBeenCalledWith(['option2']);
});
