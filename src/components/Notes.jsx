import React from 'react'
import { v4 as uuidv4 } from 'uuid'

const notes = [
  {
    // id: '4e81fc6e-bfb6-419b-93e5-0242fb6f3f6a',
    id: uuidv4(),
    task: 'Learn React',
  },
  {
    id: uuidv4(),
    task: 'Do laundry',
  },
]

export const Notes = () => {
  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>{note.task}</li>
      ))}
    </ul>
  )
}
