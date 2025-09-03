module.exports = {
  displayName: 'api-tests',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/**/getEstablishmentByID.test.js'],
  setupFilesAfterEnv: ['<rootDir>/pactum.config.js'],
  reporters: [
    'default',
    [
      'jest-html-reporter',
      {
        pageTitle: 'Relatório de Testes de API',
        outputPath: './report/test-report.html',
        includeFailureMsg: true,
        includeConsoleLog: true
      }
    ]
  ]
};
