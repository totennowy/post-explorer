import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { getPosts } from './postsService';
import { ModelPost } from '../types/modelPost';

const mock = new MockAdapter(axios);
const API_URL = process.env.VITE_API_URL;

describe('getPosts', () => {
  afterEach(() => {
    mock.reset();
  });

  it('should fetch posts successfully', async () => {
    const mockPosts: ModelPost[] = [
      { id: 1, title: 'Post 1', body: 'Body 1', userId: 1 },
      { id: 2, title: 'Post 2', body: 'Body 2', userId: 2 },
    ];

    mock.onGet(`${API_URL}/posts`).reply(200, mockPosts);

    const result = await getPosts();

    expect(result).toEqual(mockPosts);
  });

  it('should throw an error when fetching posts fails', async () => {
    mock.onGet(`${API_URL}/posts`).reply(500);

    await expect(getPosts()).rejects.toThrow('Failed to fetch posts');
  });
});
