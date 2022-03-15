// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js', '<rootDir>/setup.mocks.js'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  transformIgnorePatterns: ['/node_modules/(?!antd|@ant-design|rc-.+?|@babel/runtime).+(js|jsx)$'],
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@/pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@/routes/(.*)$': '<rootDir>/src/routes/$1',
    '^@/services/(.*)$': '<rootDir>/src/services/$1',
    '^@/utils/(.*)$': '<rootDir>/src/utils/$1',
  },
  collectCoverage: true,
  coverageReporters: ['json', 'html'],
};

module.exports = createJestConfig(customJestConfig);
