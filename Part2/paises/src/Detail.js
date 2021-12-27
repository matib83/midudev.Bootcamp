import React, { useState,useEffect } from 'react'
import axios from 'axios'

export const Detail = ({name, capital, population, languages, flags}) => {
  const [clima, setClima] = useState([])
  console.log("Mostrar info del pais y clima de la capital")
  console.log({clima})
  console.log(clima.length)

  useEffect(() => {
    const params = {
      q: capital[0],
      appid: '4d67ea42d48801cf5b227107f0720b32'
    } 
    console.log("useEffect clima")   
    axios.get('https://api.openweathermap.org/data/2.5/weather?', {params}).then(response => {
      const {data} = response
      console.log("Leyendo clima de la API")
      setClima(data)
      console.log({data})
    })  
  }, [capital])

  return (
    <div>
      <h1>{name.common}</h1>
      Capital: {capital}<br/>
      population: {population}
      <h3>Languages</h3>
      {Object.values(languages).map(element => <li key={element}> {element}</li>)}
      <br/>
      <img src={flags.svg} alt="BANDERA NO DISPONIBLE" style={{height: 100, width: 100}}/>
      <h3>Weather in {capital}</h3>
      <div> 

      {clima.length === 0?
        <>Cargando clima...</>
        :
        <>
          <strong>Temperature: </strong> {(clima.main.feels_like-273.15).toFixed(2)} Celcius <br/>
          <img src={'https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png'} alt="LOGO NO DISPONIBLE" style={{height: 50, width: 50}}/> <br/>
          <strong>Wind: </strong> {(clima.wind.speed*2.237).toFixed(2)} mph <br/>
        </>
      }
      </div>
    </div>
  )
}