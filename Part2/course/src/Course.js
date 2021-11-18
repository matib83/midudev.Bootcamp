
export const Course = ({courses}) => {
    console.log("Renderizando el curso")
    console.log({courses})
    console.log(courses.map(course => course.name))

    return (
        <div>
            <h1>Web development curriculum</h1>
            {courses.map(course => {
                return (
                    <div key={course.id}>
                        <h2>{course.name}</h2>

                        {course.parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>)}

                        <b>Total of {course.parts.map(part => part.exercises).reduce((prev, next) => prev + next )} exercises </b>
                    </div>
                )})
            }
        </div>
    )
}