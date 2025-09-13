import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav class="navbar fixed-top bg-body-tertiary">
  <div class="container-fluid">
    <Link className="navbar-brand" to="#">Home</Link>
    {/* <Link className="navbar-brand" to="/people">People</Link> */}
    {/* <Link className="navbar-brand" to="/files">Files</Link> */}
  </div>
</nav>
    </div>
  )
}

export default Navbar
