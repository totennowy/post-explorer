import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { getUsers } from './usersService';
import { ModelUser } from '../types/modelUser';

const mock = new MockAdapter(axios);
const API_URL = process.env.VITE_API_URL;

describe('getUsers', () => {
  afterEach(() => {
    mock.reset();
  });

  it('should fetch users successfully', async () => {
    const mockUsers: ModelUser[] = [
      {
        id: 1,
        name: 'User 1',
        username: 'user1',
        email: 'user1@example.com',
        address: {
          street: 'Street 1',
          suite: 'Suite 1',
          city: 'City 1',
          zipcode: '00001',
          geo: {
            lat: '0.0000',
            lng: '0.0000',
          },
        },
        phone: '123-456-7890',
        website: 'user1.com',
        company: {
          name: 'Company 1',
          catchPhrase: 'CatchPhrase 1',
          bs: 'BS 1',
        },
      },
      {
        id: 2,
        name: 'User 2',
        username: 'user2',
        email: 'user2@example.com',
        address: {
          street: 'Street 2',
          suite: 'Suite 2',
          city: 'City 2',
          zipcode: '00002',
          geo: {
            lat: '0.0001',
            lng: '0.0001',
          },
        },
        phone: '234-567-8901',
        website: 'user2.com',
        company: {
          name: 'Company 2',
          catchPhrase: 'CatchPhrase 2',
          bs: 'BS 2',
        },
      },
    ];

    mock.onGet(`${API_URL}/users`).reply(200, mockUsers);

    const result = await getUsers();

    expect(result).toEqual(mockUsers);
  });

  it('should throw an error when fetching users fails', async () => {
    mock.onGet(`${API_URL}/users`).reply(500);

    await expect(getUsers()).rejects.toThrow('Failed to fetch users');
  });
});
