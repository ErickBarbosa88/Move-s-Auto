const { getAllUsers, getUsersbyID, updateUsersByID } = require('../../../src/requests/userRequest');
const { generateUserUpdateData } = require('../../../Utils/userData');

describe('Atualizar Usuario', () => {
  let usuarios = [];
  let id;

  beforeEach(async () => {
    usuarios = await getAllUsers();

    expect(Array.isArray(usuarios)).toBe(true);
    expect(usuarios.length).toBeGreaterThan(0);

    id = usuarios[0].id;
  });

  it('deve atualizar um usuário com dados aleatórios', async () => {
    const randomUserData = generateUserUpdateData();
    const updatedUser = await updateUsersByID(id, randomUserData);

    expect(updatedUser).toBeDefined();
    expect(updatedUser.id).toBe(id);
    expect(updatedUser.name).toBe(randomUserData.name);
    //expect(updatedUser.email).toBe(randomUserData.email);
    // adicione mais asserts se necessário
  });
});
