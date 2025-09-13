import React from 'react'
import "./Card.css"
const Card = ({image, title, description}) => {
  return (
    <>
    <div className='maincard'>
      <div className="card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      </div>
    </div>
    </>
  )
}

export default Card
