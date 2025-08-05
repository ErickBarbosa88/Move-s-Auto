const { getAllUsers, getUsersbyID } = require('../../../src/requests/userRequest');

describe('Listar usuários existentes', () => {
  let usuarios = [];
  let id;

  beforeEach(async () => {
    usuarios = await getAllUsers();

    expect(Array.isArray(usuarios)).toBe(true);
    expect(usuarios.length).toBeGreaterThan(0);

    id = usuarios[0].id;
  });

  it('deve listar um usuário específico', async () => {
    const user = await getUsersbyID(id);

    expect(user).toBeDefined();
    expect(user.id).toBe(id);
  });
});
