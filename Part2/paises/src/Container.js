import {Overage} from './Overage.js'
import {Detail} from './Detail.js'

const handleClickSelected = (e,setSelected,filteredData) => {
    console.log(e.target.name)
    const index = filteredData.findIndex( (element) => element.name.common === e.target.name);
    console.log(index)
    setSelected(index)
  }

export const Container = ({filteredData, selected, setSelected, clima}) => {
    console.log(filteredData)
    if (filteredData.length > 10) 
        return (
            <Overage />
        )

    if (filteredData.length > 1 && selected<0)    
        return (
            filteredData.map(pais => 
                    <div key={pais.name.common}>
                        {console.log(pais.name.common)}
                        {pais.name.common}{" "}
                        <button name={pais.name.common} onClick={
                            (e)=>handleClickSelected(e,setSelected,filteredData)}> {"Show"} 
                        </button>                        
                    </div>
            )
        )

    if (filteredData.length > 0 || selected >= 0 )  
    {
        if (selected >= 0) 
            return (
                <Detail {...filteredData[selected]} clima={clima} />
            )

        return (
            <Detail {...filteredData[0]} clima={clima}/>
        )
    }

    return (
        <div>
            No hay datos para mostrar...
        </div>
    )
}