import React from 'react'
import InputBox from '../atoms/InputBox'
import Button from '../atoms/Button'
import "./Login.css"

const AddFile = () => {

  return (
    <>
    <div className='login'>
      <div className="body">
      <InputBox className='add-file' type='file' placeholder='Add file' onChange={(e) => console.log(e.target.value)} />
      <InputBox className='add-file' type='text' placeholder='File Name' onChange={(e) => console.log(e.target.value)} />
      <InputBox className='add-file' type='text' placeholder='File Description' onChange={(e) => console.log(e.target.value)} />
      <Button className='add-button' label='Add File' onClick={() => console.log('File Added')} />
      </div>
    </div>
    </>
  )
}

export default AddFile
