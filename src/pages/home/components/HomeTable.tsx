import Pagination from '@components/pagination/Pagination';
import HomeTableRow from './HomeTableRow';
import useGetPostsWithAuthors from '../hooks/useGetPostsWithAuthors';
import useHomeTable from '../hooks/useHomeTable';

const HomeTable = () => {
  const { postsData, loading, error } = useGetPostsWithAuthors();
  const { paginatedData, rowsPerPage, setRowsPerPage } =
    useHomeTable(postsData);
  return (
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
        <Pagination rowsPerPage={rowsPerPage} setRowsPerPage={setRowsPerPage} />
      </tfoot>
    </table>
  );
};

export default HomeTable;
