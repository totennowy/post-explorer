import { renderHook, act } from '@testing-library/react-hooks';
import useHomeTable from './useHomeTable';
import { ModelPostWithAuthor } from '../types/modelPostWithAuthor';

const mockPosts: ModelPostWithAuthor[] = [
  { id: 1, title: 'Post 1', body: 'Body 1', author: 'Author 1' },
  { id: 2, title: 'Post 2', body: 'Body 2', author: 'Author 2' },
  { id: 3, title: 'Post 3', body: 'Body 3', author: 'Author 3' },
  { id: 4, title: 'Post 4', body: 'Body 4', author: 'Author 4' },
  { id: 5, title: 'Post 5', body: 'Body 5', author: 'Author 5' },
];

describe('useHomeTable', () => {
  it('should initialize with default values', () => {
    const { result } = renderHook(() => useHomeTable(mockPosts));

    expect(result.current.rowsPerPage).toBe(20);
    expect(result.current.currentPage).toBe(1);
    expect(result.current.totalPages).toBe(1);
    expect(result.current.paginatedData).toEqual(mockPosts);
  });

  it('should handle rows per page change', () => {
    const { result } = renderHook(() => useHomeTable(mockPosts));

    act(() => {
      result.current.handleRowsPerPage(2);
    });

    expect(result.current.rowsPerPage).toBe(2);
    expect(result.current.currentPage).toBe(1);
    expect(result.current.totalPages).toBe(Math.ceil(mockPosts.length / 2));
    expect(result.current.paginatedData).toEqual(mockPosts.slice(0, 2));
  });

  it('should handle page change', () => {
    const { result } = renderHook(() => useHomeTable(mockPosts));

    act(() => {
      result.current.handleRowsPerPage(2);
    });

    act(() => {
      result.current.handlePageChange(2);
    });

    console.log(result.current.currentPage, result.current.paginatedData);

    expect(result.current.currentPage).toBe(2);
    expect(result.current.paginatedData).toEqual(mockPosts.slice(2, 4));
  });

  it('should not change page if out of range', () => {
    const { result } = renderHook(() => useHomeTable(mockPosts));

    act(() => {
      result.current.handlePageChange(2);
    });

    expect(result.current.currentPage).toBe(1);
  });
});
