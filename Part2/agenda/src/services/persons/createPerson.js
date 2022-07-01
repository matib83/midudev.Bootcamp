import axios from 'axios'

export const createPerson = ({ name, number }, baseUrl) => {
  return axios
    .post(baseUrl, { name, number })
    .then(response => {
      const { data } = response
      return data
    })
}