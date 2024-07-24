import React from 'react';
import { ModelRowsPerPage } from './types/modelRowsPerPage';

const RowsPerPage: React.FC<ModelRowsPerPage> = ({
  rowsPerPage,
  handleRowsPerPage,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handleRowsPerPage(Number(e.target.value));
  };

  return (
    <div className="rows_selector_container">
      <label htmlFor="rowsPerPage" className="rows_label">
        Rows per page:
      </label>
      <select
        id="rowsPerPage"
        value={rowsPerPage}
        onChange={handleChange}
        className="rows_select"
      >
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={50}>50</option>
      </select>
    </div>
  );
};

export default RowsPerPage;
