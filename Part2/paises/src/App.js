import {Filter} from './Filter.js'
import {Container} from './Container.js'
import React, { useState,useEffect } from 'react'
import axios from 'axios'

function App() {
  const [paises, setPaises] = useState([])
  const [clima, setClima] = useState([])
  const [ newFilter, setNewFilter ] = useState('')
  const [ selected, setSelected ] = useState(-1)


  useEffect(() => {
    console.log("useEffect paises")

    axios.get("https://restcountries.com/v3.1/all").then(response => {
        const {data} = response
        console.log("Leyendo paises de la API")
        setPaises(data)
      })
  }, [])

  useEffect(() => {
    const params = {
      q: 'London',
      appid: '4d67ea42d48801cf5b227107f0720b32'
    }
    console.log("useEffect clima")   
    axios.get('https://api.openweathermap.org/data/2.5/weather?', {params}).then(response => {
      const {data} = response
      console.log("Leyendo clima de la API")
      setClima(data)
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
      <Container filteredData={filteredData} selected={selected} setSelected={setSelected} clima={clima} />   
      :
      <>Cargando datos...</>
      } 
    </div>
  );
}

export default App;