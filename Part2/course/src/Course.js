
export const Course = ({courses}) => {
    console.log("Renderizando el curso")
    console.log({courses})
    console.log(courses.map(course => course.name))

    return (
        <div>
            <h1>Web development curriculum</h1>
            {courses.map(({name,id,parts}) => {
                return (
                    <div key={id}>
                        <h2>{name}</h2>

                        {parts.map(({id,name,exercises}) => <p key={id}>{name} {exercises}</p>)}

                        <b>Total of {parts.map(part => part.exercises).reduce((prev, next) => prev + next )} exercises </b>
                    </div>
                )})
            }
        </div>
    )
}