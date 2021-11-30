

export const PersonForm = ({handleSubmit, handleChangeName, handleChangeNumber, newName, newNumber}) => {
    return (
        <form onSubmit={handleSubmit}> 
            <div> name: <input type="text" onChange={handleChangeName} value={newName}/> </div>
            <div> number: <input type="text" onChange={handleChangeNumber} value={newNumber}/> </div>
            <div> <button type="submit">add</button> </div>
      </form>
    )
}