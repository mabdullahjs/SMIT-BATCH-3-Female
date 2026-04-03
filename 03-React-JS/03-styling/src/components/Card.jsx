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
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition duration-300 m-5">
      
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        {props.title}
      </h3>

      <p className="text-lg text-green-600 font-bold">
        ${props.price}
      </p>

    </div>
  )
}

export default Card