import axios from 'axios'

export const changePhone = (userId,name,number) => {
    console.log(`Usuario recibido para cambiar número: ${userId} `)
    return axios
    .put(`http://localhost:3001/persons/${userId}`,{name, number})
    .then(response =>{
      const {data} = response
      console.log(`${userId} ha cambiado su numero`)
      return data
    })
}