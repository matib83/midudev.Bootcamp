import axios from 'axios'

export const createNote = ({title, body, userId}) => {
  //return Promise.reject("something bad")  // Habilitar esta linea de codigo para probar mi mensaje de error por API
  return axios
  .post("https://jsonplaceholder.typicode.com/posts", {title, body, userId})
  .then(response =>{
    const {data} = response
    return data
  })
} 