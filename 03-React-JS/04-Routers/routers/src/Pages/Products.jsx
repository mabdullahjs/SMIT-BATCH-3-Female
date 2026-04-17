import React, { useEffect, useState } from 'react';
import Cards from '../component/Cards';

function Products() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(err => console.error("Fetch error:", err));
  }, []);

  if (loading) return <h1 style={{ textAlign: 'center' }}>Loading Products...</h1>;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {data.map(item => (
        <Cards 
          key={item.id} 
          title={item.title} 
          price={item.price} 
          des={item.description}
          image={item.image}
          id={item.id}
        />
      ))}
    </div>
  );
}

export default Products;