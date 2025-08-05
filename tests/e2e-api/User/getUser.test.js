const fs = require('fs');
const { getAllUsers } = require('../../../src/requests/userRequest');

describe('Listar usuários existentes', () => {
  it('deve retornar a lista de usuários', async () => {
    const usuarios = await getAllUsers();

    expect(Array.isArray(usuarios)).toBe(true);
    expect(usuarios.length).toBeGreaterThan(0);
  });
});
