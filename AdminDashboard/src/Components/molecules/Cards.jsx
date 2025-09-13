import React from 'react'
import Card from '../atoms/Card'
import "./Cards.css"
let cardData = [
  { image: "https://plus.unsplash.com/premium_photo-1677402408071-232d1c3c3787?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRvY3VtZW50c3xlbnwwfHwwfHx8MA%3D%3D", title: "Files", description: "You can manage your files here." },
  { image: "https://tse2.mm.bing.net/th/id/OIP.ZOQX2ehnhAx_7qZBN50m3gHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", title: "People", description: "Description for People how can access the file" }
];
const Cards = () => {
  return (
    <div className='cards'>
      {cardData.map((card, index) => (
        <Card key={index} image={card.image} title={card.title} description={card.description} />
      ))}
    </div>
  )
}

export default Cards