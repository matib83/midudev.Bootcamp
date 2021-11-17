import {Note} from './Note.js'
import {useState} from 'react'

export default function App (props) {

  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('')

  const handleChange = (event) => {
    setNewNote(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('crear nota')
    const noteToAddToState = {
      id: notes.length + 1,
      title: newNote,
      body: newNote
    }
    console.log(noteToAddToState)

    setNotes(notes.concat(noteToAddToState))  //Forma facil
    //setNewNote([...notes, noteToAddToState]) Forma dificil pero mas potente
    setNewNote("")
  }

  return (
    <div> 
      <h1>Notes</h1>
      <ol>
        {notes.map(note => <Note key={note.id} {...note} />)}
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