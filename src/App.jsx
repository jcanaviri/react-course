import React from 'react'
import { Notes } from './components/Notes'

export const App = () => {
  return (
    <>
      <button onClick={() => console.log('añadir nota')}>+</button>
      <Notes />
    </>
  )
}
