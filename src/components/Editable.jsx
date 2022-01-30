import React from 'react'

function Edit({ onEdit, value, ...props }) {
  const checkEnter = (event) => {
    if (event.key === 'Enter') {
      finishEdit(event)
    }
  }
  const finishEdit = (event) => {
    const value = event.target.value
    onEdit(value)
  }

  return (
    <input
      type="text"
      autoFocus={true}
      defaultValue={value}
      onBlur={finishEdit}
      onKeyPress={checkEnter}
    />
  )
}

export default function Editable({ editing, value, onEdit, ...props }) {
  return (
    <>
      {editing ? (
        <Edit onEdit={onEdit} value={value} {...props} />
      ) : (
        <span {...props}>{value}</span>
      )}
    </>
  )
}
