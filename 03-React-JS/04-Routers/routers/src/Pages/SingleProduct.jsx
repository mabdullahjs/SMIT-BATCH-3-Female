import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Product not found');
        }
        return res.json();
      })
      .then((json) => {
        setProduct(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <h1>Loading...</h1>;

  if (error) return <h1>Error: {error}</h1>;

  if (!product) return <h1>Product not found</h1>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product ID: {id}</h1>
      <div>
        <h2>{product.title}</h2>
        <img src={product.image} alt={product.title} width="300" />
        <p>{product.description}</p>
        <p><strong>Price: ${product.price}</strong></p>
        <p>Category: {product.category}</p>
        <p>Rating: {product.rating?.rate} ({product.rating?.count} reviews)</p>
      </div>
    </div>
  );
}

export default SingleProduct;