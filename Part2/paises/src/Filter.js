
export const Filter = ({handleChangeFilter, newFilter}) => {
    return (
        <div>
            Buscar: <input type="text" onChange={handleChangeFilter} value={newFilter}/>
        </div>
    )
}