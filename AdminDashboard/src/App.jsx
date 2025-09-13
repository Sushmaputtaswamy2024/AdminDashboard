import React from 'react'
import Home from './Components/templates/Home'
import Cards from './Components/molecules/Cards'
import AddFile from './Components/molecules/AddFile'
import AddPeople from './Components/molecules/AddPeople'
import Display from './Components/organisms/Display'
import LoginWrapper from './Components/organisms/LoginWrapper'
import Navbar from './Components/organisms/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      {/* <Home /> */}
      {/* <AddFile /> */}
      {/* <AddPeople /> */}
      {/* <Display/> */}
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route/>
      </Routes>
      </BrowserRouter>
      <Navbar/>
    </div>
  )
}

export default App
