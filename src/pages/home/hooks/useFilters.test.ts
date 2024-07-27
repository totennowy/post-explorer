import { renderHook, act } from '@testing-library/react-hooks';
import useFilters from './useFilters';
import { ModelPostWithAuthor } from '../types/modelPostWithAuthor';

const sampleData: ModelPostWithAuthor[] = [
  { id: 1, title: 'Title 1', body: 'Body 1', author: 'Author 1' },
  { id: 2, title: 'Title 2', body: 'Body 2', author: 'Author 2' },
  { id: 3, title: 'Title 3', body: 'Body 3', author: 'Author 1' },
];

test('initializes with provided data', () => {
  const { result } = renderHook(() => useFilters(sampleData));

  expect(result.current.filteredData).toEqual(sampleData);
  expect(result.current.authorOptions).toEqual([
    { value: 'Author 1', label: 'Author 1' },
    { value: 'Author 2', label: 'Author 2' },
  ]);
});

test('filters data by author', () => {
  const { result } = renderHook(() => useFilters(sampleData));

  act(() => {
    result.current.handleAuthorFilter(['Author 1']);
  });

  expect(result.current.filteredData).toEqual([
    { id: 1, title: 'Title 1', body: 'Body 1', author: 'Author 1' },
    { id: 3, title: 'Title 3', body: 'Body 3', author: 'Author 1' },
  ]);
});

test('clears author filter', () => {
  const { result } = renderHook(() => useFilters(sampleData));

  act(() => {
    result.current.handleAuthorFilter(['Author 1']);
  });

  act(() => {
    result.current.handleAuthorFilter([]);
  });

  expect(result.current.filteredData).toEqual(sampleData);
});
