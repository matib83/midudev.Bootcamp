import axios from 'axios'

export const getAllPersons = (baseUrl) => {
    return axios.get(baseUrl)
        .then(response => {
            const { data } = response
            console.log("seteando las notas de la API")
            return data
        })
}