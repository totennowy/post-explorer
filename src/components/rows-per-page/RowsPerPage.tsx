import React from 'react';
import { ModelRowsPerPage } from './types/modelRowsPerPage';

const RowsPerPage: React.FC<ModelRowsPerPage> = ({
  rowsPerPage,
  setRowsPerPage,
  resetCurrentPage,
}) => {
  
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(Number(e.target.value));
    resetCurrentPage();
  };

  return (
    <div className="pagination_container">
      <label htmlFor="rowsPerPage">Rows per page: </label>
      <select id="rowsPerPage" value={rowsPerPage} onChange={handleChange}>
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={50}>50</option>
      </select>
    </div>
  );
};

export default RowsPerPage;
