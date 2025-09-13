import React from 'react'
import { useSelector } from 'react-redux';
    
const DisplayContent = () => {
  const { files, people } = useSelector((state) => state);

  return (
    <div>
      <h2>Files</h2>
      <ul>
        {files.map((file) => (
          <li key={file.id}>{file.name}</li>
        ))}
      </ul>
      <h2>People</h2>
      <ul>
        {people.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default DisplayContent
