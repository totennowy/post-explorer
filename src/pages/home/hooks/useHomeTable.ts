import { useState } from 'react';
import { ModelPostWithAuthor } from '../types/modelPostWithAuthor';

const useHomeTable = (postsData: ModelPostWithAuthor[]) => {
  const [rowsPerPage, setRowsPerPage] = useState<number>(20);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleRowsPerPage = (value: number) => {
    setRowsPerPage(value);
    setCurrentPage(1);
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
    setRowsPerPage,
    currentPage,
    setCurrentPage,
    handleRowsPerPage,
    paginatedData,
  };
};

export default useHomeTable;
