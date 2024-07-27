import { renderHook, act } from '@testing-library/react-hooks';
import { usePagination, DOTS } from './usePagination';

describe('usePagination', () => {
  it('should generate correct pagination range', () => {
    const { result } = renderHook(() =>
      usePagination({
        totalCount: 100,
        pageSize: 10,
        currentPage: 1,
        onPageChange: jest.fn(),
      }),
    );

    expect(result.current.paginationRange).toEqual([1, 2, 3, 4, 5, DOTS, 10]);
  });

  it('should call onNext correctly', () => {
    const onPageChange = jest.fn();
    const { result } = renderHook(() =>
      usePagination({
        totalCount: 100,
        pageSize: 10,
        currentPage: 1,
        onPageChange,
      }),
    );

    act(() => {
      result.current.onNext();
    });

    expect(onPageChange).toHaveBeenCalledWith(2);
  });

  it('should call onPrevious correctly', () => {
    const onPageChange = jest.fn();
    const { result } = renderHook(() =>
      usePagination({
        totalCount: 100,
        pageSize: 10,
        currentPage: 2,
        onPageChange,
      }),
    );

    act(() => {
      result.current.onPrevious();
    });

    expect(onPageChange).toHaveBeenCalledWith(1);
  });
});
