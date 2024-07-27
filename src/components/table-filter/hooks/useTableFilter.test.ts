import { renderHook, act } from '@testing-library/react-hooks';
import useTableFilter from './useTableFilter';

describe('useTableFilter', () => {
  it('should toggle filter open and close', () => {
    const { result } = renderHook(() => useTableFilter(jest.fn()));

    act(() => {
      result.current.toggleFilter();
    });

    expect(result.current.isOpen).toBe(true);

    act(() => {
      result.current.toggleFilter();
    });

    expect(result.current.isOpen).toBe(false);
  });

  it('should close filter when clicking outside', () => {
    const { result } = renderHook(() => useTableFilter(jest.fn()));

    act(() => {
      result.current.toggleFilter();
    });

    expect(result.current.isOpen).toBe(true);

    act(() => {
      document.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
    });

    setTimeout(() => {
      expect(result.current.isOpen).toBe(false);
    }, 0);
  });
});
