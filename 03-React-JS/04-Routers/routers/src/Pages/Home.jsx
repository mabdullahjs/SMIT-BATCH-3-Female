import React from 'react'
import { Link } from 'react-router'

function Home() {
  return (
    <>
     <h1>Home</h1>
    <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"about"}>About</Link>
        <Link to={"services"}>Services</Link>
        <Link to={"contact"}>Contact Us</Link>
        <Link to={"dashboard"}>Dashboard</Link>
    </nav>
    
    </>
  )
}

export default Home