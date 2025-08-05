module.exports = {
  projects: [
    //'<rootDir>/'
    //'<rootDir>/tests/e2e-front',
  ],
  reporters: ['default', ['jest-allure', { outputDirectory: 'allure-results' }]],
  testTimeout: 30000,
  testEnvironment: 'node'
};
