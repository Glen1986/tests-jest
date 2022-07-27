import { UserService } from './UserService'
import { getMockUser } from '../__mocks__/mockUser'

jest.mock('../repositories/UserRepository')
const mockUserRepository = require('../repositories/UserRepository')

describe('UserService', ()=>{
  const mockUser = getMockUser();
  const userService = new UserService({
    userRepository: mockUserRepository,
    name:'algun usuario',
    email:'algun@email.com'
  });

  it('debe retornar el usuario, cuando este guardado', async ()=>{
    mockUserRepository.save = jest.fn().mockImplementation(()=> Promise.resolve(mockUser))
    const user = await mockUserRepository.save()
    expect(user).toHaveProperty('user_id')
    expect(user).toMatchObject({
      name:'algun usuario',
      email:'algun@email.com'
    })
  })
})
