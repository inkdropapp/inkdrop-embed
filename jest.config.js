module.exports = {
  testEnvironment: 'jsdom',
  modulePathIgnorePatterns: ['<rootDir>/lib/'],
  testMatch: ['**/__tests__/**/*.test.js'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  }
}
