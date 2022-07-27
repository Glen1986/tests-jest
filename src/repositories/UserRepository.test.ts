import getEntityManagerMock from '../__mocks__/getEntityManagerMock'
import { UserRepository } from './UserRepository'
import { v4 as uuid } from 'uuid'
import { User } from '../entities/User'

describe('UserRepository', ()=>{
  const mockUser: User = {
    user_id:uuid(),
    name:'algun nombre',
    email:'algun@email.com'
  }
  it('debe retornar el usuario guardado cuando, llamar la funcion save', async ()=>{
    const managerMock = await getEntityManagerMock({
      saveReturn:mockUser
    });

    const userRepository = new UserRepository(managerMock);
    const user = await userRepository.save(mockUser);

    expect(user).toHaveProperty('user_id')
    expect(user).toMatchObject({
      name:'algun nombre',
      email:'algun@email.com'
    })
  })
})
