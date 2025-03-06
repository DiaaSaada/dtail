/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+\\.(ts|js)$": ["ts-jest", {}],
  },
  clearMocks: true,

  // An array of file extensions your modules use
  moduleFileExtensions: ["ts", "js"],
  coverageDirectory: "coverage",
  collectCoverage: false,
  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: ["\\\\node_modules\\\\"],

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: "v8",
};
