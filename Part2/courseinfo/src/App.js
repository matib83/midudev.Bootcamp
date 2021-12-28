import {Note} from './Note.js'
import {useState, useEffect} from 'react'
import { getAllNotes } from './services/notes/getAllNotes.js'
import { createNote } from './services/notes/createNote.js'

export default function App () {

  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    console.log("useEffect")
    setLoading(true)              //Para poner por ejemplo un dibujo de cargando mientras ejecuta el fetch
    getAllNotes().then((notes) => {
      setNotes(notes)
      setLoading(false)
    })
  }, [])

  const handleChange = (event) => {
    setNewNote(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const noteToAddToState = {
      title: newNote,
      body: newNote,
      userId: 1
    }

    setError('')              //siempre limpiar los estados antes de ejecutarlos
    createNote(noteToAddToState)
      .then(newNote => {
        setNotes(prevNotes => prevNotes.concat(newNote))
      })
      .catch((error => {
        console.error(error)
        setError('la API ha fallado')
      }))
     
    console.log('crear nota')
    console.log(noteToAddToState)
    // Las lineas de codigo de abajo ya no las uso, pq envio datos al servidor
    // setNotes(notes.concat(noteToAddToState))  //Forma facil
    //setNewNote([...notes, noteToAddToState]) Forma dificil pero mas potente
    setNewNote("")
  }

  console.log("Se raliza renderizado")
  //if (notes.length === 0) return "Primer renderizado"

  return (
    <div> 
      <h1>Notes</h1>
      {loading ? "Cargando..." : ""}  
      <ol>
        {notes.map(note => <Note key={note.id} {...note} />)}
      </ol>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} value={newNote}/>
        <button>Creat nota</button>
      </form>

      {error ? <span style={{ color: "red" }}>{error}</span> : ""}
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