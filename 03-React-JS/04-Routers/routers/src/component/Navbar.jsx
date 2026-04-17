import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
    return (
        <nav style={{
            padding: '10px',
            backgroundColor: '#f8f9fa',
            borderBottom: '1px solid #dee2e6'
        }}>
            <Link to={'/'} style={{ margin: '0 15px', textDecoration: 'none', color: '#007bff' }}>Home</Link>
            <Link to={'/products'} style={{ margin: '0 15px', textDecoration: 'none', color: '#007bff' }}>Products</Link>
            <Link to={'/about'} style={{ margin: '0 15px', textDecoration: 'none', color: '#007bff' }}>About</Link>
            <Link to={'/contact'} style={{ margin: '0 15px', textDecoration: 'none', color: '#007bff' }}>Contact</Link>
            <Link to={'/services'} style={{ margin: '0 15px', textDecoration: 'none', color: '#007bff' }}>Services</Link>
            <Link to={'/dashboard'} style={{ margin: '0 15px', textDecoration: 'none', color: '#007bff' }}>Dashboard</Link>
        </nav>
    )
}

export default Navbar