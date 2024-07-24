import { useState } from 'react';
import { ModelPostWithAuthor } from '../types/modelPostWithAuthor';

const useHomeTable = (postsData: ModelPostWithAuthor[]) => {
  const [rowsPerPage, setRowsPerPage] = useState<number>(20);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = Math.ceil(postsData.length / rowsPerPage);

  const handleRowsPerPage = (value: number) => {
    setRowsPerPage(value);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const paginatedData =
    rowsPerPage === -1
      ? postsData
      : postsData.slice(
          (currentPage - 1) * rowsPerPage,
          currentPage * rowsPerPage,
        );

  return {
    rowsPerPage,
    currentPage,
    totalPages,
    paginatedData,
    handleRowsPerPage,
    handlePageChange,
  };
};

export default useHomeTable;
