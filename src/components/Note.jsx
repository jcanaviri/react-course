import React from 'react'

export const Note = ({ note, onDelete }) => {
  const handleDelete = () => {
    onDelete(note.id)
  }

  return (
    <li>
      <span>{note.task}</span>
      <button onClick={handleDelete}>x</button>
    </li>
  )
}
