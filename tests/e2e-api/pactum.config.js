const { reporter } = require('pactum');

beforeAll(() => {});

afterAll(async () => {
  await reporter.end();
});
