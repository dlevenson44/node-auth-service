/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    "@exmpl/(.*)": "<rootDir>/server/$1"
  },
  bail: true,
  forceExit: true,
}
