import axios from 'axios'

export const createPerson = ({name, number, userId}) => {
    return axios
    .post("http://localhost:3001/persons", {name, number, userId})
    .then(response =>{
      const {data} = response
      return data
    })
}