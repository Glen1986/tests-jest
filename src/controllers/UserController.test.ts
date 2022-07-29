import {UserController} from './UserController'
import {getMockUser} from '../__mocks__/mockUser'
import {makeMockResponse} from '../__mocks__/mockResponse'
import {User} from '../entities/User'
import { Request } from 'express'
import {makeMockRequest} from '../__mocks__/mockRequest'

const mockUser: User = getMockUser()

jest.mock('../services/UserService', ()=>{
  return{
    UserService: jest.fn().mockImplementation(()=>{
      return{
        createUser: jest.fn().mockImplementation(() => Promise.resolve(mockUser))
      }
    })
  }
})

const response = makeMockResponse()
const request = makeMockRequest({
  name:'algun nombre',
  email:'algun@email'
})     

const userController = new UserController()

describe('UserController', ()=>{

  it('Deve retornar status 201 e o usuário criado', async ()=>{

    await userController.createUser(request, response) 
    expect(response.state.status).toBe(201)
    expect(response.state.json).toHaveProperty('user_id')
    expect(response.state.json).toMatchObject({
        name:'algun usuario',
        email:'algun@email.com'
      })
    })
  it('Deve retornar status 400, quando o usuario nao informar nombre e email', async ()=> {
    const request = makeMockRequest({
         name:'',
        email:''
    })
    
    await userController.createUser(request, response)
    expect(response.state.status).toBe(400)
    })
  })

