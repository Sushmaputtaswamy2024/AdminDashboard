import React from 'react'
import Button from '../atoms/Button'

const Display = ({ text1, text2, edit, del }) => {
  return (
    <div>
      {text1}
      {text2}
      <Button label="Edit" onClick={edit} className="btn-edit" />
      <Button label="Delete" onClick={del} className="btn-delete" />  
    </div>
  )
}

export default Display
