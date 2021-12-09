import {Paises} from './Paises.js'
import {Filter} from './Filter.js'
import React, { useState,useEffect } from 'react'
import axios from 'axios'

const WarningCountries = () => {
  return <p>Muchos países para mostrar, agregue mas letras a la búsqueda</p>
}

function App() {
  const [paises, setPaises] = useState([])
  const [ newFilter, setNewFilter ] = useState('')

  useEffect(() => {
    console.log("useEffect")

    axios.get("https://restcountries.com/v3.1/all").then(response => {
        const {data} = response
        console.log("seteando las notas de la API")
        setPaises(data)
      })
  }, [])

  const handleChangeFilter = (event) => {
    setNewFilter (event.target.value)
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
      <h3>Resultados</h3>
      {filteredData.length > 10 ?
        <WarningCountries />
        :
        filteredData.map(pais => <Paises key={pais.name.common} name={pais.name.common} />
      )}
    </div>
  );
}

export default App;