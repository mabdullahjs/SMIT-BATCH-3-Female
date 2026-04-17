import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

function SingleProduct() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products${id}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
    <h1>Single Products:{id}</h1>
    </>
  )
}

export default SingleProduct;
