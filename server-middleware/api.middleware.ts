import { ServerMiddleware } from '@nuxt/types'
import axios, { AxiosResponse, Method } from 'axios'

export const Q2A_COOKIE_HEADER = 'q2a-cookie'
export const SET_Q2A_COOKIE_HEADER = 'set-q2a-cookie'

const API_URL = process.env.SECRET_API_URL?.endsWith('/')
  ? process.env.SECRET_API_URL.slice(0, -1)
  : process.env.SECRET_API_URL

export function stringifySetCookieHeader(setCookie: string[] = []): string {
  const cookies = setCookie.map((setCookie) => setCookie.split(';')[0])
  return cookies.join('; ')
}

const serverMiddleware: ServerMiddleware = async function (req, res) {
  const axiosResponse = await axios({
    url: `${API_URL}${req.url}`,
    method: req.method as Method,
    headers: {
      cookie: decodeURIComponent(
        (req.headers[Q2A_COOKIE_HEADER] as string) || ''
      ),
    },
  }).catch((err) => {
    if (err.response) {
      return err.response as AxiosResponse
    }

    throw err
  })

  const responseCookieHeader = stringifySetCookieHeader(
    axiosResponse.headers['set-cookie']
  )

  if (responseCookieHeader) {
    res.setHeader(SET_Q2A_COOKIE_HEADER, responseCookieHeader)
  }

  res.statusCode = axiosResponse.status
  res.end(JSON.stringify(axiosResponse.data))
}

export default serverMiddleware
