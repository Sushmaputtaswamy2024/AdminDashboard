import React from 'react'

const InputBox = ({ className, onChange , placeholder , type }) => {
  return (
    <div>
      <input className={className} type={type} onChange={onChange} placeholder={placeholder} />
    </div>
  )
}

export default InputBox
