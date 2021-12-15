export const Detail = ({name, capital, population, languages, flags}) => {

    return (
      <div>
        <h1>{name.common}</h1>
        Capital: {capital}<br/>
        population: {population}
        <h3>Languages</h3>
        {Object.values(languages).map(element => <li key={element}> {element}</li>)}
        <br/>
        <img src={flags.svg} alt="BANDERA NO DISPONIBLE" style={{height: 100, width: 100}}/>
      </div>
    )
  }