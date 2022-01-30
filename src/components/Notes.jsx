import React from 'react'
import { Note } from './Note'

export const Notes = ({ notes, onDelete }) => {
  return (
    <ul>
      {notes.map((note) => (
        <Note 
          key={note.id} 
          note={note} 
          onDelete={onDelete} />
      ))}
    </ul>
  )
}
