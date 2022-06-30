import React, { useState } from 'react'
// Si utilizo un solo archivo para importar, traerlo asi:
//import { del as deletePerson } from "./services/persons"
import { deletePerson } from './services/persons/deletePerson.js'

export const Persons = ({ filteredData, persons, setPersons, waiting }) => {
    //const [ clicked, setClicked ] = useState(-1)
    const [error, setError] = useState('')
    console.log(filteredData.length)

    const handleClickclicked = (e) => {
        console.log("Manejador de boton")
        console.log(e.target.name)
        const result = window.confirm(`Delete ${e.target.name}?`)
        const index = filteredData.findIndex((element) => element.name === e.target.name);
        console.log(`Borrar el ID: ${filteredData[index].id} de la base de datos?`)
        console.log(`Resultado eleccion: ${result}`)

        if (result) {
            setError('')
            deletePerson(filteredData[index].id)
                .then(response => {
                    setPersons(persons.filter(person => person.id !== filteredData[index].id))
                })
                .catch((error => {
                    console.error({ error })
                    setError('la API ha fallado')
                }))
            console.log("Persona eliminada")
        }
        else {
            console.log("PROCESO CANCELADO: Persona NO eliminada")
        }
    }

    if (waiting === 0) {       // Si aun no lei la base de datos anuncio la carga...
        return (
            <div>
                <>"Cargando agenda..."</>
            </div>
        )
    }

    if (waiting === 1 && persons.length === 0) {       // Si termino de leer los datos de la BD y no hay nada aviso
        return (
            <div>
                <>"Agenda vacía!"</>
            </div>
        )
    }

    // Si no acurrio lo anterior, significa que ya leyó la BD y hay datos, consulto por el filtro que
    // cuando hay datos y no pongo nada, siempre es mayor a cero. 
    return (
        <div>
            {filteredData.length === 0          // Si el filtro vale cero, es pq no hay datos con los valores cargados
                ? <>"Usuario no encontrado"</>
                :
                <table>
                    <tbody>
                        <tr>
                            <th><strong>Nombre</strong></th>
                            <th><strong>Telefono</strong></th>
                        </tr>
                        {filteredData.map(person =>
                            <tr key={person.name}>
                                <td>{person.name}</td>
                                <td>{person.number}{" "}<button name={person.name} onClick={(e) => handleClickclicked(e)}> {"Delete"} </button></td>
                            </tr>)}
                    </tbody>
                </table>
            }
        </div>
    )
}