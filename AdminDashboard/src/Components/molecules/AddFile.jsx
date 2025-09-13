import React from 'react'
import InputBox from '../atoms/InputBox'
import Button from '../atoms/Button'

const AddFile = () => {

  return (
    <div>
      <InputBox className='add-file' type='file' placeholder='Add file' onChange={(e) => console.log(e.target.value)} />
      <InputBox className='add-file' type='text' placeholder='File Name' onChange={(e) => console.log(e.target.value)} />
      <InputBox className='add-file' type='text' placeholder='File Description' onChange={(e) => console.log(e.target.value)} />
      <Button className='add-button' label='Add File' onClick={() => console.log('File Added')} />
    </div>
  )
}

export default AddFile
