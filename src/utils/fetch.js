import { camelCase, mapKeys, snakeCase } from 'lodash/fp'
import axios from 'axios'

function fetch(path, options = {}) {
  const { headers, ...rest } = options

  return axios(path, {
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    transformRequest: [mapKeys(snakeCase)],
    transformResponse: [mapKeys(camelCase)],

    ...rest,
  })
}

export default fetch
