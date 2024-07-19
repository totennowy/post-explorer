import axios from 'axios';
import { ModelPost } from '../types/modelHome';

const API_URL = import.meta.env.VITE_API_URL;

export const getPosts = async (): Promise<ModelPost[]> => {
  try {
    const response = await axios.get<ModelPost[]>(`${API_URL}/posts`);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts: ', error);
    throw new Error('Failed to fetch posts');
  }
};
