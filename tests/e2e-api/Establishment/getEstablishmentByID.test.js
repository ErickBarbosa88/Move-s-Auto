const { getAllEstablishment, getEstablishmentByid } = require('../../../src/requests/establishmentRequest');

describe('Listar Estabelecimentos existentes', () => {
  let estabelecimentos = [];
  let id;

  beforeEach(async () => {
    estabelecimentos = await getAllEstablishment();

    expect(Array.isArray(estabelecimentos)).toBe(true);
    expect(estabelecimentos.length).toBeGreaterThan(0);

    id = estabelecimentos[0].id;
  });

  it('deve listar um estabelecimento específico', async () => {
    const estabelecimento = await getEstablishmentByid(id);

    expect(estabelecimento).toBeDefined();
    expect(estabelecimento.id).toBe(id);
  });
});
