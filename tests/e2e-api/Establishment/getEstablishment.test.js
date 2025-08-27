const fs = require('fs');
const { getAllEstablishment } = require('../../../src/requests/establishmentRequest');

describe('Listar estabelecimentos existentes', () => {
  it('deve retornar a lista de estabelecimentos', async () => {
    const estabelecimentos = await getAllEstablishment();

    expect(Array.isArray(estabelecimentos)).toBe(true);
    expect(estabelecimentos.length).toBeGreaterThan(0);
    console.log(estabelecimentos);
    
  });
});
