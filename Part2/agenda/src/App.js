import { Persons } from './Persons.js'
import { Filter } from './Filter.js'
import { PersonForm } from './PersonForm.js'
import React, { useState, useEffect } from 'react'
import './App.css'
//Puedo importar los modulos de abajo como un archivo solo haciendo:
/* import {
  create as createPerson,
  getAll as getAllPersons,
  change as changePhone,
  del as deletePerson
} from './services/persons' */

import { createPerson } from './services/persons/createPerson.js'
import { changePhone } from './services/persons/changePhone.js'
import { getAllPersons } from './services/getAllPersons.js'
//const baseUrl = 'http://localhost:3001/api/persons'
const baseUrl = 'https://polite-bunnyhug-86367.herokuapp.com/api/persons'
const ERRORmESSAGE = "Nombre y teléfono deben contener al menos 1 caracter"

const Notification = ({ message, messageId }) => {
  if (message === null) {
    return null
  }

  if (messageId === 0)
    return (
      <div className="error">
        {message}
      </div>
    )
  else
    return (
      <div className="newUser">
        {message}
      </div>
    )
}

const Footer = () => {
  const footerStyle = {
    color: 'green',
    fontStyle: 'italic',
    fontSize: 16
  }
  return (
    <div style={footerStyle}>
      <br />
      <em>Pie de pagina, utilizado para poner al final</em>
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [newUserMensagge, setNewUserMenssage] = useState(null)
  const [errorNotFound, setErrorNotFound] = useState(null)
  const [waiting, setNewWaiting] = useState(0)

  useEffect(() => {
    console.log("useEffect")
    setNewWaiting(true)
    getAllPersons(baseUrl)
      .then(persons => {
        setPersons(persons)
        setNewWaiting(false)
      })
  }, [])

  const handleChangeName = (event) => {
    setNewName(event.target.value)
  }

  const handleChangeNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleChangeFilter = (event) => {
    setNewFilter(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("Aca debo revisar si hay que agregar a la persona")
    console.log({ persons })
    console.log({ newName })
    console.log({ newNumber })

    const person = persons.find(p => p.name === newName)
    console.log({ person })
    if (person !== undefined) {
      const result = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
      if (result) {
        changePhone(person, newNumber, baseUrl)
          .then(response => {
            console.log({ response })
            //Actualizo mi variable de estado PERSONS modificando el numero de telefono de la persona agendada
            setPersons(persons.map(p => p.name === newName ? response : p))
            console.log(`Teléfono de ${newName} cambiado`)
          })
          .catch(error => {
            setPersons(persons.filter(p => p.name !== newName))
            setErrorNotFound(`${newName} has already been removed from server`)
            setTimeout(() => {
              setErrorNotFound(null)
            }, 5000)
            //Actualizo mi variable de estado PERSONS quitando la persona no hallada en la BD
          })
      }
      else {
        console.log("PROCESO CANCELADO: El telefono no ha cambiado")
      }
    }
    else {
      if (newName === "" || newNumber === "") {
        setErrorMessage(ERRORmESSAGE)
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
        return
      }
      console.log("Persona no hallada en la agenda");
      console.log('Agendar persona')
      const personToAddState = {
        name: newName,
        number: newNumber,
      }
      console.log(personToAddState)
      createPerson(personToAddState, baseUrl)
        .then(newPerson => {
          setPersons(prevPersons => prevPersons.concat(newPerson))
        })
      setNewName("")
      setNewNumber("")
      setNewFilter("")
      setNewUserMenssage(`Added ${newName}`)
      setTimeout(() => {
        setNewUserMenssage(null)
      }, 5000)
      return
    }
  }

  const lowercasedFilter = newFilter.toLowerCase()
  const filteredData = persons.filter(person => {               // Primero hago un filtro para definir q personas pasan
    return (
      Object.keys(person)   // segundo, busco cada campo de person (name, number)
        .some(key => {  // Tercero, verifico si alguno de los campos se valida
          if (typeof person[key] !== 'string') return false // Evito los campos que no sean String
          return (
            person[key].toLowerCase().includes(lowercasedFilter) //se valida si contienen algo de lowercasedFilter
          )
        })
    )
  })

  console.log({ newFilter })
  console.log({ filteredData })
  console.log({ persons })

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleChangeFilter={handleChangeFilter} newFilter={newFilter} />
      <h3>Add a new</h3>
      <Notification message={errorMessage} messageId={0} />
      <Notification message={newUserMensagge} messageId={1} />
      <Notification message={errorNotFound} messageId={0} />
      <PersonForm handleSubmit={handleSubmit} handleChangeName={handleChangeName}
        handleChangeNumber={handleChangeNumber} newName={newName} newNumber={newNumber}
      />
      <h3>Numbers</h3>
      {<Persons filteredData={filteredData} persons={persons} setPersons={setPersons} waiting={waiting} />}
      <Footer />
    </div>
  )
}

export default App

//Metodo que utilizaba para mostrar la agenda filtrada
//{filteredData.map(person => <Persons key={person.name} {...person} />)}
