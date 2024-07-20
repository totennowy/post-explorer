import useGetPostsWithAuthors from '../hooks/useGetPostsWithAuthors';
import HomeTableRow from './HomeTableRow';

const HomeTable = () => {
  const { postsData, loading, error } = useGetPostsWithAuthors();

  return (
    <table>
      <thead>
        <tr>Author</tr>
        <tr>Post ID</tr>
        <tr>Title</tr>
        <tr>Body</tr>
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
