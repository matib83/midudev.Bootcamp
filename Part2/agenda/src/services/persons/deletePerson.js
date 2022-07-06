import axios from 'axios'

export const deletePerson = (userId, baseUrl) => {
  console.log(`ID recibido para eliminar: ${userId} `)
  return axios
    .delete(`${baseUrl}/${userId}`)
    .then(response => {
      const { data } = response
      console.log(`${userId} ha sido eliminado de la base de datos`)
      return data
    })
}