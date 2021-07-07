import { Api } from './__generated-api'

export const httpService = new Api({
  baseURL: process.env.API_URL,
  withCredentials: true,
})
