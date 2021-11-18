
export const Course = ({name, parts}) => {
    console.log("Renderizando el curso")
    console.log({parts})

    return (
        <div>
            <h1>{name}</h1>
            {parts.map(part => <p key={part.id}> {part.name} {part.exercises} </p> )}
            <b>Total of {parts.map(part => part.exercises).reduce((prev, next) => prev + next )} exercises </b>
        </div>
    )
}