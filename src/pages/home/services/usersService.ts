import axios from 'axios';
import { ModelUser } from '../types/modelHome';

const API_URL = import.meta.env.VITE_API_URL;

export const getUsers = async (): Promise<ModelUser[]> => {
  try {
    const response = await axios.get<ModelUser[]>(`${API_URL}/users`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users: ', error);
    throw new Error('Failed to fetch users');
  }
};