import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { Notes } from './components/Notes'

export const App = () => {
  const [notes, setNotes] = useState([
    {
      id: uuidv4(),
      task: 'Learn React',
      editing: false,
    },
    {
      id: uuidv4(),
      task: 'Do laundry',
      editing: false,
    },
  ])

  const addNote = () => {
    setNotes([...notes, { id: uuidv4(), task: 'New task' }])
  }

  const deleteNote = (noteId) => {
    setNotes(notes.filter((note) => note.id !== noteId))
  }

  const activateNoteEdit = (noteId) => {
    setNotes(notes.map(note => {
      if (note.id === noteId) { 
        note.editing = true
      }
      return note
    }))
  }

  const editNote = (noteId, newTask) => {
    setNotes(notes.map(note => {
      if (note.id === noteId) {
        note.editing = false
        note.task = newTask
      }
      return note
    }))
  }

  return (
    <>
      <button onClick={addNote}>+</button>
      <Notes
        notes={notes}
        onDelete={deleteNote}
        onNoteClick={activateNoteEdit}
        onEdit={editNote}
      />
    </>
  )
}
