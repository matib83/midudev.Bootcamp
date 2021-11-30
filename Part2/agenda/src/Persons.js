

export const Persons = ({filteredData}) => {

    return (
        <div>
            {filteredData.map(person => <>{person.name} {person.number}<br/></>)}
        </div>
    )
}