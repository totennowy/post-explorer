import { useEffect, useState } from 'react';

import { getPosts } from '../services/postsService';
import { getUsers } from '../services/usersService';
import { ModelPostWithAuthor } from '../types/modelPostWithAuthor';
import { ModelUser } from '../types/modelUser';

const useGetPostsWithAuthors = () => {
  const [postsData, setPostsData] = useState<ModelPostWithAuthor[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPostsAndUsers = async () => {
    try {
      const [posts, users] = await Promise.all([getPosts(), getUsers()]);

      const userMap = new Map<number, string>();
      users.forEach((user: ModelUser) => {
        userMap.set(user.id, user.name);
      });

      const postsWithAuthors = posts.map((post) => ({
        ...post,
        author: userMap.get(post.userId) || 'Unknown',
      }));

      setPostsData(postsWithAuthors);
    } catch (error) {
      setError('Error fetching posts or users');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPostsAndUsers();
  }, []);

  return {
    postsData,
    loading,
    error,
  };
};

export default useGetPostsWithAuthors;
