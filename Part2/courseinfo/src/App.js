import {Note} from './Note.js'
import {useState} from 'react'

export default function App (props) {

  const [notes, setNotes] = useState(props.notes)
  //const [newNote, setNewNote] = useState('')

  const handleChange = () => {
    console.log('change')
  }

  return (
    <div>
      <h1>Notes</h1>
      <ol>
        {notes.map(note => <Note key={note.id} id={note.id} content={note.content} date={note.date} />)}
      </ol>
      <div>
        <input type='text' onChange={handleChange}/>
        <button>Creat nota</button>
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