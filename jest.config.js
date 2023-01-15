/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '~/server/(.*)$': '<rootDir>/server/$1'
  },
  bail: true,
  forceExit: true,
  collectCoverageFrom: [
    '**/*.{ts}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
}
