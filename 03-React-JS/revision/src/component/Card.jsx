// import { useState } from 'react'

import { useState } from "react";
import { useNavigate } from "react-router";

// const Card = ({title , func}) => {
//     const [input , setInput] = useState('');


//     const submitInput = ()=>{
//         console.log(input);
//         func(input)
//     }

//     return (
//         <>
//             <div>Card {title}</div>
//             <input type="text" placeholder='enter title' value={input} onChange={(e)=>setInput(e.target.value)} />
//             <button onClick={submitInput}>submit</button>
//         </>
//     )
// }

// export default Card



const Card = ({ title, image, price, id, func }) => {


  const navigate = useNavigate()

  const addToCart = ()=>{
    func("item added")
  }
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-price">${price}</p>
        <button className="card-btn" onClick={() => navigate(`/product/${id}`)}>Show more</button>
        <button className="card-btn" onClick={addToCart}>Add to cart</button>
      </div>
    </div>
  );
};

export default Card;