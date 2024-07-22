import useGetPostsWithAuthors from '../hooks/useGetPostsWithAuthors';
import HomeTableRow from './HomeTableRow';

const HomeTable = () => {
  const { postsData, loading, error } = useGetPostsWithAuthors();

  return (
    <table className="table_container">
      <thead>
        <tr className="head_container">
          <td className="head_column">Author</td>
          <td className="head_column">Post ID</td>
          <td className="head_column">Title</td>
          <td className="head_column">Body</td>
        </tr>
      </thead>
      <tbody>
        {postsData.map((post) => (
          <HomeTableRow key={post.id} {...post} />
        ))}
      </tbody>
    </table>
  );
};

export default HomeTable;
