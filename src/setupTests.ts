import '@testing-library/jest-dom';

process.env.VITE_API_URL = 'https://api.example.com';

Object.defineProperty(global, 'import.meta', {
  value: {
    env: {
      VITE_API_URL: process.env.VITE_API_URL,
    },
  },
});
