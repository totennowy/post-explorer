import '@testing-library/jest-dom';

(global as any).importMetaEnv = {
  VITE_API_URL: 'https://api.example.com',
};

Object.defineProperty(global, 'import.meta', {
  value: {
    env: (global as any).importMetaEnv,
  },
});
