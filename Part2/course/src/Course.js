
export const Course = ({course}) => {
    console.log("Renderizando el curso")
    console.log({course})
    return (
        <div>
            <h1>{course.name}</h1>
            {course.parts.map(part => <p key={part.id}> {part.name} {part.exercises} </p> )}
        </div>
    )
}