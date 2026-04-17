import React from 'react';
import { Link } from 'react-router';

function Cards({ title, des, price, image, id }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      margin: '16px',
      width: '250px',
      textAlign: 'center',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    }}>
      <img src={image} alt={title} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
      <h3>{title}</h3>
      <p>{des.length > 100 ? des.substring(0, 100) + '...' : des}</p>
      <p><strong>${price}</strong></p>
      <Link to={`/products/${id}`} style={{
        display: 'inline-block',
        padding: '8px 16px',
        backgroundColor: '#007bff',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '4px'
      }}>
        View Details
      </Link>
    </div>
  );
}

export default Cards;