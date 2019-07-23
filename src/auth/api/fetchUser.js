import env from 'config/env'
import fetch from 'utils/fetch'

async function fetchUser(firstName, lastName) {
  return fetch(`${env.API_URL}/users`, {
    method: 'GET',
    params: {
      firstName,
      lastName,
    },
  })
    .then(({ data }) => data)
}

export default fetchUser
