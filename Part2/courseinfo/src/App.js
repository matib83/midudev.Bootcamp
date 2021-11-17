import {Note} from './Note.js'
import {useState} from 'react'

export default function App (props) {

  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('')

  const handleChange = (event) => {
    setNewNote(event.target.value)
  }

  const handleClick = (event) => {
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

  return (
    <div> 
      <h1>Notes</h1>
      <ol>
        {notes.map(note => <Note key={note.id} id={note.id} content={note.content} date={note.date} />)}
      </ol>
      <div>
        <input type='text' onChange={handleChange} value={newNote}/>
        <button onClick={handleClick}>Creat nota</button>
      </div>
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