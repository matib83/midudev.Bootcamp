let acum = 0

export const Course = ({name, parts}) => {
    console.log("Renderizando el curso")
    console.log({parts})
    acum = 0
    parts.map(part => acum+=part.exercises)
    console.log(acum)
    return (
        <div>
            <h1>{name}</h1>
            {parts.map(part => <p key={part.id}> {part.name} {part.exercises} </p> )}
            <b>Total of {acum} exercises </b>
        </div>
    )
}