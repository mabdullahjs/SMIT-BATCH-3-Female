import { useState } from "react"
import Card from "../component/Card"
import useFetch from "../hooks/useFetch"

const Product = () => {
  const [cartItem , setCartItem] = useState(0)
  const [data, loading, error] = useFetch('https://fakestoreapi.com/products')
  console.log(data);


  const getCartItemDetail = (data)=>{
    setCartItem(prev => prev + 1)
  }
  
  
  return (
    <>
      <h1>Product {cartItem}</h1>
      {loading && <h1>Loading...</h1>}
      {error && <h1>error occured...</h1>}
      <div className="product-container">
        {data && data.map(item => {
          return <Card key={item.id} title={item.title} image={item.image} price={item.price} id={item.id} func={getCartItemDetail}/>
        })}
      </div>
    </>

  )
}

export default Product