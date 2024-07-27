import React from 'react';
import HomeTableRow from './HomeTableRow';
import useGetPostsWithAuthors from '../hooks/useGetPostsWithAuthors';
import useHomeTable from '../hooks/useHomeTable';
import RowsPerPage from '@components/rows-per-page/RowsPerPage';
import Pagination from '@components/pagination/Pagination';
import useFilters from '../hooks/useFilters';
import TableFilter from '@components/table-filter/TableFilter';
import SkeletonLoader from '@components/skeleton-loader/SkeletonLoader';
import TableError from '@components/table-error/TableError';

const HomeTable = () => {
  const { postsData, loading, error } = useGetPostsWithAuthors();
  const { filteredData, handleAuthorFilter, authorOptions } =
    useFilters(postsData);

  const {
    rowsPerPage,
    currentPage,
    paginatedData,
    handleRowsPerPage,
    handlePageChange,
  } = useHomeTable(filteredData);

  return (
    <table className="table_container">
      <thead className="table_head">
        <tr className="row_container">
          <td className="head_column">
            <p className="head_title">Author</p>
            <TableFilter
              options={authorOptions}
              onChange={handleAuthorFilter}
              placeholder="Filter by author"
            />
          </td>
          <td className="head_column">Post ID</td>
          <td className="head_column">Title</td>
          <td className="head_column">Body</td>
        </tr>
      </thead>
      {loading ? (
        <SkeletonLoader />
      ) : error ? (
        <TableError
          message={'Something went wrong with fetching data. Sorry!'}
        />
      ) : (
        <tbody>
          {paginatedData.map((post) => (
            <HomeTableRow key={post.id} {...post} />
          ))}
        </tbody>
      )}
      <tfoot className="table_foot">
        <tr className="foot_container">
          <td className="foot_box">
            <Pagination
              currentPage={currentPage}
              totalCount={filteredData.length}
              siblingCount={1}
              pageSize={rowsPerPage}
              onPageChange={handlePageChange}
            />
            <RowsPerPage
              rowsPerPage={rowsPerPage}
              handleRowsPerPage={handleRowsPerPage}
            />
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default HomeTable;
