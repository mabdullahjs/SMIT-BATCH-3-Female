import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
    return (
        <div>
            <Link to={'/'}>Home</Link>
            <Link to={'/products'}>Products</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/contact'}>Contact</Link>
            <Link to={'/services'}>Services</Link>
            <Link to={'/dashboard/student'}>Dashboard</Link>
        </div>

    )
}

export default Navbar