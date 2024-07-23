import HomeTableRow from './HomeTableRow';
import useGetPostsWithAuthors from '../hooks/useGetPostsWithAuthors';
import RowsPerPage from '@components/rows-per-page/RowsPerPage';
import Pagination from '@components/pagination/Pagination';
import usePagination from '@components/pagination/hooks/usePagination';
import { useState } from 'react';

const HomeTable = () => {
  const { postsData, loading, error } = useGetPostsWithAuthors();
  const [rowsPerPage, setRowsPerPage] = useState<number>(20);
  const { currentPage, totalPages, handlePageChange, resetCurrentPage } =
    usePagination(postsData.length, rowsPerPage);

  const paginatedData = postsData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage,
  );

  return (
    <div>
      <table className="table_container">
        <thead className="table_head">
          <tr className="row_container">
            <td className="head_column">Author</td>
            <td className="head_column">Post ID</td>
            <td className="head_column">Title</td>
            <td className="head_column">Body</td>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((post) => (
            <HomeTableRow key={post.id} {...post} />
          ))}
        </tbody>
        <tfoot className="table_foot">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            handlePageChange={handlePageChange}
          />
          <RowsPerPage
            rowsPerPage={rowsPerPage}
            setRowsPerPage={setRowsPerPage}
            resetCurrentPage={resetCurrentPage}
          />
        </tfoot>
      </table>
    </div>
  );
};

export default HomeTable;
