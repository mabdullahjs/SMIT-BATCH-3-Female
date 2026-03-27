// import React, { useEffect, useState } from 'react'

// const Card = () => {
//     const [counter, setCounter] = useState(0)
//     const [secondcounter, setSecondCounter] = useState(10)
//     useEffect(()=>{
//         console.log("component mounted");


//         return ()=>{
//             console.log("component unmount");
            
//         }
        
//     } , [counter])
//   return (
//     <>
//     <h3>Iphone X</h3>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, debitis.</p>
//     <button onClick={() => setCounter(counter + 1)}>+ {counter}</button>
//     <button onClick={() => setSecondCounter(secondcounter + 1)}>+ {secondcounter}</button>
//     </>
//   )
// }

// export default Card


import React from 'react'

const Card = (props) => {
  return (
    <>
    <h3>title: {props.title}</h3>
    <h3>price: {props.price}</h3>
    </>
  )
}

export default Card