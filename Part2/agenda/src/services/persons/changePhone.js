import axios from 'axios'

export const changePhone = ({ id, name, number }, newNumber) => {

  console.log(`Usuario a cambiar número: ${name} id: ${id} numero viejo: ${number} `)
  console.log(`Numero nuevo: ${newNumber} `)
  number = newNumber  //Para mantener el mismo atributo en la BD, sinó, cambia
  return axios
    .put(`http://localhost:3001/persons/${id}`, { name, number })
    .then((response) => {
      console.log(`${name} ha cambiado su numero`)
      const { data } = response

      return data
    })
}