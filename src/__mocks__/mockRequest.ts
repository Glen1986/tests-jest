import { Request } from 'express'
import { Params } from 'express-serve-static-core'

export function makeMockRequest ({ params, query, body, name, email }:
  { params?: Params, query?: Params, body?: Params, name?:String, email?:String }): Request {
  const request = {
    params: params || {},
    query: query || {},
    body: {
      name:name,
      email:email
    }
  } as unknown

  return request as Request
}
