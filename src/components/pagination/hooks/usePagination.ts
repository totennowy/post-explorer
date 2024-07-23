import { useState } from 'react';

const usePagination = (totalItems: number, rowsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = Math.ceil(totalItems / rowsPerPage);

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const resetCurrentPage = () => {
    setCurrentPage(1);
  };

  return {
    currentPage,
    totalPages,
    handlePageChange,
    resetCurrentPage,
  };
};

export default usePagination;
