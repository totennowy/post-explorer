import React from 'react';
import { render, screen } from '@testing-library/react';
import HomeTable from './HomeTable';
import { jest } from '@jest/globals';

jest.mock('../hooks/useGetPostsWithAuthors', () => ({
  __esModule: true,
  default: () => ({
    postsData: [],
    loading: false,
    error: null,
  }),
}));

jest.mock('../hooks/useHomeTable', () => ({
  __esModule: true,
  default: () => ({
    rowsPerPage: 10,
    currentPage: 1,
    paginatedData: [],
    handleRowsPerPage: jest.fn(),
    handlePageChange: jest.fn(),
  }),
}));

jest.mock('../hooks/useFilters', () => ({
  __esModule: true,
  default: () => ({
    filteredData: [],
    handleAuthorFilter: jest.fn(),
    authorOptions: [],
  }),
}));

test('renders HomeTable without crashing', () => {
  render(<HomeTable />);
  expect(screen.getByText('Author')).toBeInTheDocument();
});
