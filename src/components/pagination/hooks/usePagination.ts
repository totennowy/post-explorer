import { useMemo } from 'react';
import { ModelUsePaginationProps } from '../types/modelPagination';

export const DOTS = '...';

const range = (start: number, end: number) => {
  return Array.from({ length: end - start + 1 }, (_, idx) => idx + start);
};

export const usePagination = ({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage,
  onPageChange,
}: ModelUsePaginationProps & { onPageChange: (page: number) => void }) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);
    const totalPageNumbers = siblingCount + 5;

    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount,
    );
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      return [...range(1, 3 + 2 * siblingCount), DOTS, totalPageCount];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      return [
        1,
        DOTS,
        ...range(totalPageCount - (3 + 2 * siblingCount) + 1, totalPageCount),
      ];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      return [
        1,
        DOTS,
        ...range(leftSiblingIndex, rightSiblingIndex),
        DOTS,
        totalPageCount,
      ];
    }

    return [];
  }, [totalCount, pageSize, siblingCount, currentPage]);

  const onNext = () => {
    if (currentPage < Math.ceil(totalCount / pageSize)) {
      onPageChange(currentPage + 1);
    }
  };

  const onPrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  return {
    paginationRange,
    onNext,
    onPrevious,
  };
};
