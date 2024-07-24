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
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

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

  return (
    <ul className="pagination-container">
      <li
        className={`pagination-item ${currentPage === 1 ? 'disabled' : ''}`}
        onClick={onPrevious}
      >
        &lt;
      </li>
      {paginationRange.map((pageNumber, index) =>
        pageNumber === DOTS ? (
          <li key={index} className="pagination-item dots">
            &#8230;
          </li>
        ) : (
          <li
            key={index}
            className={`pagination-item ${
              pageNumber === currentPage ? 'selected' : ''
            }`}
            onClick={() => onPageChange(pageNumber as number)}
          >
            {pageNumber}
          </li>
        ),
      )}
      <li
        className={`pagination-item ${
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
