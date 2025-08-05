require('dotenv').config();
const { spec } = require('pactum');

async function getAllUsers() {
  const response = await spec().get(`${process.env.API_BASE_URL}/user`).expectStatus(200);

  return response.body.data;
}

async function getUsersbyID(id) {
  const response = await spec().get(`${process.env.API_BASE_URL}/user/${id}`).expectStatus(200);

  return response.body.data;
}

async function updateUsersByID(id, userData) {
  const response = await spec()
    .patch(`${process.env.API_BASE_URL}/user/${id}`) // endpoint PATCH
    .withJson(userData) // envia o corpo com os dados
    .inspect() // mostra request e response no console
    .expectStatus(200); // espera status 200 OK

  return response.body.data;
}

module.exports = {
  getAllUsers,
  getUsersbyID,
  updateUsersByID
};
