module.exports = {
  verbose: true,
  testURL: 'http://localhost/',
  setupFiles: ['<rootDir>/unit-test/setup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  moduleNameMapper: {
    '^.+\\.(css|scss|svg|png)$': '<rootDir>/unit-test/jest-stub.js',
    '^components(.*)$': '<rootDir>/src/components$1',
    '^containers(.*)$': '<rootDir>/src/containers$1',
    '^utils(.*)$': '<rootDir>/src/core/utils$1',
  },
  modulePaths: ['src'],
  setupTestFrameworkScriptFile: '<rootDir>/unit-test/setup-test.js',
}
