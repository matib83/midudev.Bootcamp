import axios from 'axios'

export const deletePerson = (userId) => {
  console.log(`ID recibido para eliminar: ${userId} `)
  return axios
    .delete(`http://localhost:3001/api/persons/${userId}`)
    .then(response => {
      const { data } = response
      console.log(`${userId} ha sido eliminado de la base de datos`)
      return data
    })
}