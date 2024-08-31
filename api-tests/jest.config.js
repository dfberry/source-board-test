const { createDefaultPreset } = require('ts-jest')

const defaultPreset = createDefaultPreset()

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  // [...]
  // Replace `ts-jest` with the preset you want to use
  // from the above list
  ...defaultPreset,
  testMatch: ['**/?(*.)+(spec|test).ts'], // Only run .ts test files
  // Optionally, you can set the test directory to only include API tests
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
}