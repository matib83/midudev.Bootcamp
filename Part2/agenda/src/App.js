import {Person} from './Person.js'
import React, { useState } from 'react'
import './App.css';

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '123456'},
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')

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
        number: newNumber
      }
      console.log(personToAddState)
      setPersons(persons.concat(personToAddState))
      setNewName ("")
      setNewNumber ("")
      setNewFilter ("")
    }
  }

  const lowercasedFilter = newFilter.toLowerCase();
  const filteredData = persons.filter(item => {
    return Object.keys(item).some(key => item[key].toLowerCase().includes(lowercasedFilter));
  })

  return (
    <div>
      <h2>Phonebook</h2>
      <div> Buscar: <input type="text" onChange={handleChangeFilter} value={newFilter}/> </div>
      <h3>Add a new</h3>
      <form onSubmit={handleSubmit}> 
        <div> name: <input type="text" onChange={handleChangeName} value={newName}/> </div>
        <div> number: <input type="text" onChange={handleChangeNumber} value={newNumber}/> </div>
        <div> <button type="submit">add</button> </div>
      </form>
      <h3>Numbers</h3>
      {filteredData.map(person => <Person key={person.name} {...person} />)}
    </div>
  )
}

export default App