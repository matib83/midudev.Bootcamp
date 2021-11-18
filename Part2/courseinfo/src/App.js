import {Note} from './Note.js'
import {useState, useEffect} from 'react'

export default function App () {

  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    console.log("useEffect")
    setLoading(true);

    setTimeout(() => { 
      console.log("Time out finalizado")
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => {
        //console.log(json)
        console.log("seteando las notas de la API")
        setNotes(json)
        setLoading(false)
        })
    }, 2000)
  }, [])

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