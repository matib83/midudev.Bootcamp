import {Persons} from './Persons.js'
import {Filter} from './Filter.js'
import {PersonForm} from './PersonForm.js'
import React, { useState,useEffect } from 'react'
import axios from 'axios'
import './App.css';
import { createPerson } from './services/persons/createPerson.js'

const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')

  useEffect(() => {
    console.log("useEffect")

    axios.get("http://localhost:3001/persons").then(response => {
        const {data} = response
        console.log("seteando las notas de la API")
        setPersons(data)
      })
  }, [])

  const handleChangeName = (event) => {
    setNewName (event.target.value)
  }

  const handleChangeNumber = (event) => {
    setNewNumber (event.target.value)
  }

  const handleChangeFilter = (event) => {
    setNewFilter (event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("Aca debo revisar si hay que agregar a la persona")
    console.log(persons)
    console.log(newName)

    if (persons.find(element => element.name === newName)!==undefined)
    {
      console.log(`${newName} is already added to phonebook`)
      alert(`${newName} is already added to phonebook`)
    }
    else
    {
      console.log("Persona no hallada en la agenda");  
      console.log('Agendar persona')
      const personToAddState = {
        name: newName,
        number: newNumber,
        Userid: 1
      }
      console.log(personToAddState)
      createPerson(personToAddState)
        .then(newPerson=> {
          setPersons(prevPersons => prevPersons.concat(newPerson))
        })
      setNewName ("")
      setNewNumber ("")
      setNewFilter ("")
    }
  }

  const lowercasedFilter = newFilter.toLowerCase()
  const filteredData = persons.filter(person => {               // Primero hago un filtro para definir q personas pasan
                                        return (
                                          Object.keys(person)   // segundo, busco cada campo de person (name, number)
                                                .some(key => {  // Tercero, verifico si alguno de los campos se valida
                                                  if ( typeof person[key] !== 'string' ) return false // Evito los campos que no sean String
                                                  return (
                                                    person[key].toLowerCase().includes(lowercasedFilter) //se valida si contienen algo de lowercasedFilter
                                                  )}
                                                )
                                        ) 
                                      })
  
  console.log({filteredData})

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleChangeFilter={handleChangeFilter} newFilter={newFilter}/>
      <h3>Add a new</h3>
      <PersonForm handleSubmit={handleSubmit} handleChangeName={handleChangeName} 
                  handleChangeNumber={handleChangeNumber} newName={newName} newNumber={newNumber} 
      /> 
      <h3>Numbers</h3>
      {<Persons filteredData={filteredData} />}
    </div>
  )
}

export default App

//Metodo que utilizaba para mostrar la agenda filtrada
//{filteredData.map(person => <Persons key={person.name} {...person} />)}
