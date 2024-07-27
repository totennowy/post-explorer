import React from 'react';
import { render, screen } from '@testing-library/react';
import HomeTableRow from './HomeTableRow';
import { ModelPostWithAuthor } from '../types/modelPostWithAuthor';

const post: ModelPostWithAuthor = {
  id: 1,
  title: 'Sample Title',
  body: 'Sample Body',
  author: 'Sample Author',
};

test('renders HomeTableRow with correct data', () => {
  render(<HomeTableRow {...post} />);

  expect(screen.getByText('Sample Author')).toBeInTheDocument();
  expect(screen.getByText('1')).toBeInTheDocument();
  expect(screen.getByText('Sample Title')).toBeInTheDocument();
  expect(screen.getByText('Sample Body')).toBeInTheDocument();
});
