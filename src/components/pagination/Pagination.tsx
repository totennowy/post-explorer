import React from 'react';
import { ModelPagination } from './types/modelPagination';
import { DOTS, usePagination } from './hooks/usePagination';

const Pagination: React.FC<ModelPagination> = ({
  currentPage,
  totalCount,
  siblingCount = 1,
  pageSize,
  onPageChange,
}) => {
  const { paginationRange, onNext, onPrevious } = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
    onPageChange,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  return (
    <ul className="pagination_container">
      <li
        className={`pagination_item ${currentPage === 1 ? 'disabled' : ''}`}
        onClick={onPrevious}
      >
        &lt;
      </li>
      {paginationRange.map((pageNumber, index) =>
        pageNumber === DOTS ? (
          <li key={index} className="pagination_item dots">
            &#8230;
          </li>
        ) : (
          <li
            key={index}
            className={`pagination_item ${
              pageNumber === currentPage ? 'selected' : ''
            }`}
            onClick={() => onPageChange(pageNumber as number)}
          >
            {pageNumber}
          </li>
        ),
      )}
      <li
        className={`pagination_item ${
          currentPage === Math.ceil(totalCount / pageSize) ? 'disabled' : ''
        }`}
        onClick={onNext}
      >
        &gt;
      </li>
    </ul>
  );
};

export default Pagination;
