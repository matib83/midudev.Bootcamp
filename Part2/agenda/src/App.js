import {Persons} from './Persons.js'
import {Filter} from './Filter.js'
import {PersonForm} from './PersonForm.js'
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

  const lowercasedFilter = newFilter.toLowerCase()
  const filteredData = persons.filter(person => {               // Primero hago un filtro para definir q personas pasan
                                        return (
                                          Object.keys(person)   // segundo, busco cada campo de person (name, number)
                                                .some(key => {  // Tercero, verifico si alguno de los campos se valida
                                                  return (
                                                    person[key].toLowerCase().includes(lowercasedFilter) //se valida si contienen algo de lowercasedFilter
                                                  )}
                                                )
                                        ) 
                                      })

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleChangeFilter={handleChangeFilter} newFilter={newFilter}/>
      <h3>Add a new</h3>
      <PersonForm handleSubmit={handleSubmit} handleChangeName={handleChangeName} 
                  handleChangeNumber={handleChangeNumber} newName={newName} newNumber={newNumber} 
      /> 
      <h3>Numbers</h3>
      {filteredData.map(person => <Persons key={person.name} {...person} />)}
    </div>
  )
}

export default App

//Metodo que utilizaba para mostrar la agenda filtrada
//{filteredData.map(person => <Persons key={person.name} {...person} />)}
