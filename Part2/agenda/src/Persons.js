import React, { useState } from 'react'
import { deletePerson } from './services/persons/deletePerson.js'

export const Persons = ({filteredData, setPersons}) => {
    //const [ clicked, setClicked ] = useState(-1)
    const [error, setError] = useState('')
    console.log(filteredData.length)

    const handleClickclicked = (e) => {
        console.log("Manejador de boton")
        console.log(e.target.name)
        const result = window.confirm(`Delete ${e.target.name}?`)
        const index = filteredData.findIndex( (element) => element.name === e.target.name);
        console.log(`Borrar el ID: ${filteredData[index].id} de la base de datos?`)
        console.log(`Resultado eleccion: ${result}`)
        
        if (result){ 
            setError('') 
            deletePerson(filteredData[index].id)
            .then(response => {
                setPersons(filteredData.filter(person => person.id !== filteredData[index].id))
              })
              .catch((error => {
                console.error(error)
                setError('la API ha fallado')
              }))
            console.log("Persona eliminada")
        }
        else{
            console.log("PROCESO CANCELADO: Persona NO eliminada")
        }
    }

    return (
        <div>
            {filteredData.length===0? <>"Cargando agenda..."</>
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
                        <td>{person.number}{" "}<button name={person.name} onClick={(e)=>handleClickclicked(e)}> {"Delete"} </button></td> 
                    </tr>)}
                </tbody>
            </table>}
        </div>
    )
}