import {Person} from './Person.js'
import React, { useState } from 'react'
import './App.css';

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const handleChange = (event) => {
    setNewName (event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("Aca debo revisar si hay que agregar a la persona")
    console.log(persons)
    console.log(newName)

    if (persons.find(element => element.name === newName)!==undefined)
    {
      console.log(`${newName} is already added to phonebook`)
    }
    else
    {
      console.log("Persona no hallada en la agenda");  
      console.log('Agendar persona')
      const personToAddState = {
        name: newName
      }
      console.log(personToAddState)
      setPersons(persons.concat(personToAddState))
      setNewName ("")
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}> 
        <div>
          name: <input type="text" onChange={handleChange} value={newName}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <Person key={person.name} {...person} />)}
    </div>
  )
}

export default App
