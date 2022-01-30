import React from 'react'

export const Note = ({ children, ...props }) => {
  return (
    <div {...props}>
      {children}
    </div>
  )
}
