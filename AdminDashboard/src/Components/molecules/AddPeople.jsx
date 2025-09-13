import React from 'react'
import InputBox from '../atoms/InputBox'
import Button from '../atoms/Button'
import "./Addpeople.css"
const AddPeople = () => {


    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');


  return (
    <>

    <div className='login'>
      <div className="body">

      <InputBox className='add-people' type='text' placeholder='Name' onChange={(e) => setName(e.target.value)} />
      <InputBox className='add-people' type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
      <Button className='add-button' label='Add Person' onClick={() => console.log('Person Added')} />  
      </div>
    </div>
    </>
  )
}

export default AddPeople
