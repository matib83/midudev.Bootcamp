import {Overage} from './Overage.js'
import {Detail} from './Detail.js'
import React, { useState,useEffect } from 'react'

export const Container = ({filteredData}) => {
    const [ clicked, setClicked ] = useState(-1)

    console.log({filteredData})

    useEffect(() => {
    console.log("useEffect filtro")
    setClicked(-1)
    }, [filteredData])

    const handleClickclicked = (e) => {
    console.log("Manejador de boton")
    console.log(e.target.name)
    const index = filteredData.findIndex( (element) => element.name.common === e.target.name);
    console.log(index)
    setClicked(index)
    }

    if (filteredData.length === 0)
    return (
        <div>         
            No hay datos para mostrar...
        </div>
    )

    if (filteredData.length > 10) 
        return (
            <Overage />
        )

    if (filteredData.length > 1 && clicked<0)  {
        console.log ("Mostrar paises filtrados")
        return (
            filteredData.map(pais => 
                    <div key={pais.name.common}>
                        {console.log(pais.name.common)}
                        {pais.name.common}{" "}
                        <button name={pais.name.common} onClick={
                            (e)=>handleClickclicked(e)}> {"Show"} 
                        </button>                        
                    </div>
            )
        )
    }

    // Si no ocurrio ninguno de los estados anteriores, es porque el filtro econtro 1 pais
    // o porque el usuario seleccionó uno. En ambos casos, debo mostrar los datos del pais
    console.log("Paso los datos del pais a mostrar. Tamaño del filtro: "+filteredData.length)
    console.log('Indice del filtro: '+clicked)
    return(
        filteredData.length === 1?                      
        <Detail {...filteredData[0]}/>              // el indice es el 0, porque hay un solo pais    
        :
        <Detail {...filteredData[clicked]}/>        // El indice está establecido en clicked
    )
}