import axios from 'axios'

export const create = ({ name, number }) => {
    return axios
        .post("http://localhost:3001/persons", { name, number })
        .then(response => {
            const { data } = response
            return data
        })
}

export const getAll = () => {
    return axios.get("http://localhost:3001/persons")
        .then(response => {
            const { data } = response
            console.log("seteando las notas de la API")
            return data
        })
}

export const change = (userId, name, number) => {
    console.log(`Usuario recibido para cambiar número: ${userId} `)
    return axios
        .put(`http://localhost:3001/persons/${userId}`, { name, number })
        .then((response) => {
            const { data } = response
            console.log(`${userId} ha cambiado su numero`)
            console.log({ data })
            return data
        })
        .catch((error => {
            console.error("Usuario no encontrado")
            console.log({ error })
            //const {data} = error
            return error
        }))
}

export const del = (userId) => {
    console.log(`ID recibido para eliminar: ${userId} `)
    return axios
        .delete(`http://localhost:3001/persons/${userId}`)
        .then(response => {
            const { data } = response
            console.log(`${userId} ha sido eliminado de la base de datos`)
            return data
        })
}