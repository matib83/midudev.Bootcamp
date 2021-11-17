import {Note} from './Note.js'
import {useState} from 'react'

export default function App (props) {

  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  const handleChange = (event) => {
    setNewNote(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('crear nota')
    console.log(newNote )
    const noteToAddToState = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    }
    console.log(noteToAddToState)

    setNotes(notes.concat(noteToAddToState))  //Forma facil
    //setNewNote([...notes, noteToAddToState]) Forma dificil pero mas potente
    setNewNote("")
  }

  const handleShowAll = () => {
    setShowAll(() => !showAll)
  }

  return (
    <div> 
      <h1>Notes</h1>
      <button onClick={handleShowAll}>{showAll ? "Show only important" : "Show all"}</button>
      <ol>
        {notes
        .filter(note => {
          if (showAll === true) return true // Si el estado showAll es true muestro TODAS las notas
          return note.important === true    // Si no, solo muestro als notas IMPORTANTES
        })
        .map(note => <Note key={note.id} id={note.id} content={note.content} date={note.date} />)}
      </ol>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} value={newNote}/>
        <button>Creat nota</button>
      </form>
    </div> 
  );
}

/* FORMA NO REAL
<ul>
<li>{notes[0].content}</li>
<li>{notes[1].content}</li>
<li>{notes[2].content}</li>
</ul>
*/