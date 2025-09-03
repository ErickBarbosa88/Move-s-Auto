require('dotenv').config();
const { spec } = require('pactum');

async function getAllEstablishment() {
  const response = await spec().get(`${process.env.API_BASE_URL}/establishment`).expectStatus(200);

  return response.body.data;
}

async function getEstablishmentByid(id) {
  const response = await spec().get(`${process.env.API_BASE_URL}/establishment/id/${id}`).expectStatus(200);

  return response.body.data;
}



module.exports = {
  getAllEstablishment,
  getEstablishmentByid
//  updateUsersByID
};
