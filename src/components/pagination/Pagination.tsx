import { ModelPagination } from './types/modelPagination';

const Pagination: React.FC<ModelPagination> = ({
  rowsPerPage,
  setRowsPerPage,
}) => {
  return (
    <div className="pagination_container">
      <label htmlFor="rowsPerPage">Rows per page: </label>
      <select
        id="rowsPerPage"
        value={rowsPerPage}
        onChange={(e) => setRowsPerPage(Number(e.target.value))}
      >
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={50}>50</option>
        <option value={-1}>All</option>
      </select>
    </div>
  );
};

export default Pagination;
