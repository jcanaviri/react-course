import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { Notes } from './components/Notes'

export const App = () => {
  const [notes, setNotes] = useState([
    {
      id: uuidv4(),
      task: 'Learn React',
    },
    {
      id: uuidv4(),
      task: 'Do laundry',
    },
  ])

  const addNote = () => {
    setNotes([...notes, { id: uuidv4(), task: 'New task' }])
  }

  const deleteNote = (noteId) => {
    setNotes(notes.filter(note => note.id !== noteId))
  }

  return (
    <>
      <button onClick={addNote}>+</button>
      <Notes notes={notes} onDelete={deleteNote} />
    </>
  )
}
