import axios from 'axios'

// Servicio generado que no necesariamente es de React que me recupera todas las notas
// Si el dia de mañana no utilizo mas React, este codigo se puede utilizar igual

export const getAllNotes = () => {
    return axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            const {data} = response
            console.log("seteando las notas de la API")
            return data
        })
}