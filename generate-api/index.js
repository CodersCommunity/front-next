require('dotenv').config()

const path = require('path')
const axios = require('axios')
const yaml = require('js-yaml')
const { generateApi } = require('swagger-typescript-api')

if (!process.env.OPEN_API_SCHEMA_URL) {
  throw new Error('OPEN_API_SCHEMA_URL env variable not defined')
}

// eslint-disable-next-line no-console
console.log('Api schema: fetching...')

axios.get(process.env.OPEN_API_SCHEMA_URL).then((res) => {
  const schema = yaml.load(res.data)

  // eslint-disable-next-line no-console
  console.log('Api schema: successful fetched!')

  generateApi({
    name: '__generated-api.ts',
    output: path.resolve(__dirname, '../services'),
    spec: schema,
    httpClientType: 'axios',
    templates: path.resolve(__dirname, 'sta-templates'),
  })
})
