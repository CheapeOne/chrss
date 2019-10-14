module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coveragePathIgnorePatterns: ['/node_modules/'],
  // transform: {
  //   '^.+\\.tsx?$': 'ts-jest',
  // },
  globalSetup: './src/tests/jest.global-setup.ts',
};
