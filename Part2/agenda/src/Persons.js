import React, { useState } from 'react'

export const Persons = ({filteredData}) => {
    //const [ clicked, setClicked ] = useState(-1)
    console.log(filteredData.length)

    const handleClickclicked = (e) => {
        console.log("Manejador de boton")
        console.log(e.target.name)
        const result = window.confirm(`Delete ${e.target.name}?`)
        console.log(result)
        //const index = filteredData.findIndex( (element) => element.name.common === e.target.name);
        //console.log(index)
        //setClicked(index)
        }

    return (
        <div>
            {filteredData.length===0? <>"Cargando agenda..."</>:<>Agenad cargada</>}
            {filteredData.forEach(person => { <>{person}</>})}
            <>Nombre persona - Telefono persona {" "}                         
            <button name={"Nombre persona"} onClick={(e)=>handleClickclicked(e)}> {"Delete"} </button> <br/></>
        </div>
    )
}

//<>{person.name} - {person.number} {" "} </>
//<>{filteredData[0].name} - {filteredData[0].number} {" "}