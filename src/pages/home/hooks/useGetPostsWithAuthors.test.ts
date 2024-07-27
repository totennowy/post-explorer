import { renderHook } from '@testing-library/react-hooks';
import useGetPostsWithAuthors from './useGetPostsWithAuthors';
import { getPosts } from '../services/postsService';
import { getUsers } from '../services/usersService';
import { ModelPost } from '../types/modelPost';
import { ModelUser } from '../types/modelUser';

jest.mock('../services/postsService');
jest.mock('../services/usersService');

const mockPosts: ModelPost[] = [
  { userId: 1, id: 1, title: 'Post 1', body: 'Body 1' },
  { userId: 2, id: 2, title: 'Post 2', body: 'Body 2' },
];

const mockUsers: ModelUser[] = [
  {
    id: 1,
    name: 'Author 1',
    username: 'username1',
    email: 'email1@example.com',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: { lat: '', lng: '' },
    },
    phone: '',
    website: '',
    company: { name: '', catchPhrase: '', bs: '' },
  },
  {
    id: 2,
    name: 'Author 2',
    username: 'username2',
    email: 'email2@example.com',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: { lat: '', lng: '' },
    },
    phone: '',
    website: '',
    company: { name: '', catchPhrase: '', bs: '' },
  },
];

describe('useGetPostsWithAuthors', () => {
  it('fetches posts and users successfully', async () => {
    (getPosts as jest.Mock).mockResolvedValue(mockPosts);
    (getUsers as jest.Mock).mockResolvedValue(mockUsers);

    const { result, waitForNextUpdate } = renderHook(() =>
      useGetPostsWithAuthors(),
    );

    await waitForNextUpdate();

    const expectedPostsWithAuthors = [
      { id: 1, title: 'Post 1', body: 'Body 1', author: 'Author 1', userId: 1 },
      { id: 2, title: 'Post 2', body: 'Body 2', author: 'Author 2', userId: 2 },
    ];

    expect(result.current.postsData).toEqual(expectedPostsWithAuthors);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(null);
  });
});
