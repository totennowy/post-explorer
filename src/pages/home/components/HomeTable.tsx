import HomeTableRow from './HomeTableRow';
import useGetPostsWithAuthors from '../hooks/useGetPostsWithAuthors';
import useHomeTable from '../hooks/useHomeTable';
import RowsPerPage from '@components/rows-per-page/RowsPerPage';
import Pagination from '@components/pagination/Pagination';

const HomeTable = () => {
  const { postsData, loading, error } = useGetPostsWithAuthors();
  const {
    rowsPerPage,
    currentPage,
    paginatedData,
    handleRowsPerPage,
    handlePageChange,
  } = useHomeTable(postsData);

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
          <div className="foot_container">
            <Pagination
              currentPage={currentPage}
              totalCount={postsData.length}
              pageSize={rowsPerPage}
              onPageChange={handlePageChange}
            />
            <RowsPerPage
              rowsPerPage={rowsPerPage}
              handleRowsPerPage={handleRowsPerPage}
            />
          </div>
        </tfoot>
      </table>
    </div>
  );
};

export default HomeTable;
