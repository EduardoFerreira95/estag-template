const { defaults } = require('jest-config');

export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  transform: {
    "^.+\\.ts?$": "ts-jest"
  },
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts'],
  testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.ts?$',
};
