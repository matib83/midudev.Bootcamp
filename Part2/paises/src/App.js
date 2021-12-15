import {Filter} from './Filter.js'
import {Container} from './Container.js'
import React, { useState,useEffect } from 'react'
import axios from 'axios'

function App() {
  const [paises, setPaises] = useState([])
  const [ newFilter, setNewFilter ] = useState('')
  const [ selected, setSelected ] = useState(-1)

  useEffect(() => {
    console.log("useEffect")

    axios.get("https://restcountries.com/v3.1/all").then(response => {
        const {data} = response
        console.log("Leyendo paises de la API")
        setPaises(data)
      })
  }, [])

  const handleChangeFilter = (event) => {
    setNewFilter (event.target.value)
    setSelected(-1)
  }

  const lowercasedFilter = newFilter.toLowerCase()
  const filteredData = paises.filter(pais => pais.name.common.toLowerCase().includes(lowercasedFilter))

  // sort by name
  filteredData.sort(function(a, b) {
    const nameA = a.name.common.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.common.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });
                            
  return (
    <div className="App">
      <h1 className="App-header">     
        Buscador de paises
      </h1>
      <Filter handleChangeFilter={handleChangeFilter} newFilter={newFilter}/>
      {paises.length>1 ? 
      <Container filteredData={filteredData} selected={selected} setSelected={setSelected} />   
      :
      <>Cargando datos...</>
      } 
    </div>
  );
}

export default App;