const { faker } = require('@faker-js/faker');

function generateUserUpdateData() {
  return {
    name: faker.person.firstName(),
    // phone: faker.phone.number(),
    // email: 'teste@gmail.com',
    //password: faker.internet.password(),
    // birthday: faker.date.birthdate({ mode: 'year' }).toISOString().split('T')[0], // formato: yyyy-mm-dd
    // state: faker.location.state(),
    //city: faker.location.city(),
    /* reduced_mobility: [
      faker.helpers.arrayElement([
        'Usuário de cadeira de rodas',
        'Deficiência visual',
        'Deficiência auditiva'
        ])
      ],*/
    role: 'USER'
  };
}

module.exports = { generateUserUpdateData };
