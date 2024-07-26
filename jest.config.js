module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
      '^@components/(.*)$': '<rootDir>/src/components/$1',
      '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
      '^@services/(.*)$': '<rootDir>/src/services/$1',
      '^@styles/(.*)$': '<rootDir>/src/styles/$1',
      '^@types/(.*)$': '<rootDir>/src/types/$1',
    },
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    testMatch: ['<rootDir>/src/**/*.test.(ts|tsx)'],
  };
  