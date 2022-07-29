import axios from 'axios'

const server = axios.create({
  baseURL: 'http://localhost:5001'
})

describe('/user', ()=>{
  it('Deve retornar status 200', async ()=>{
    const user = await server.post('/user', {
      name:'some name',
      email:'some@mail.com'
    }) 
    expect(user.status).toBe(201)
  })
})


