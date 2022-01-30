import React from 'react'

export const Notes = ({ notes }) => {
  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>{note.task}</li>
      ))}
    </ul>
  )
}
