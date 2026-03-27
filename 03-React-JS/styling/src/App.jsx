// hooks
// api call
// quiz app
// styling tailwind material ui
// components props
// react bootstrap

// import React, { useState } from 'react'

// const App = () => {
//   const [counter, setCounter] = useState(0)
//   return (
//     <>
//       <h1>Hello world {counter}</h1>
//       <button onClick={() => setCounter(counter + 1)}>+</button>
//     </>
//   )
// }

// export default App


// import React, { useState } from 'react'
// import Card from './components/Card'

// const App = () => {
//   const [show , setShow] = useState(true)
//   return (
//     <>
//     <h1>hello world</h1>
//     <button onClick={()=>setShow(!show)}>{show ? 'Hide' : 'Show'}</button>
//     {show && <Card/>}
//     {/* {show ? <Card/> : null} */}
//      <br /><br />
//     </>
//   )
// }

// export default App


// import React, { useEffect, useState } from 'react'

// const App = () => {
//   const [loading , setLoading] = useState(true);
//   const [error , setError] = useState(false);
//   const [user , setUser] = useState(null);
//   useEffect(()=>{
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(res => {
//       console.log(res);
//       setUser(res)

//     }).catch(err => {
//       console.log(err);
//       setError(true)

//     }).finally(()=>{
//       setLoading(false)
//     })
//   } , [])
//   return (
//     <>
//     <div>hello world</div>
//     {loading && <h1>Loading...</h1>}
//     {error && <h1>Error occured</h1>}
//     {user && user.map(item =>{
//       return <h3 key={item.id}>{item.name}</h3>
//     })}
//     {/* {user ? user.ma} */}
//     </>
//   )
// }

// export default App




import React from 'react'
import Btn from './components/Btn'
import Card from './components/Card'
import './App.css'

const App = () => {
  return (
    <>
      <h1 className='text-center bg-red-400 text-white hover:bg-red-500 p-5 my-3 cursor-pointer'>Quiz App</h1>
      <h1 style={{
        textAlign: 'center',
        backgroundColor: 'red',
        color: 'white'
      }}>Quiz App</h1>
      <Btn title="submit"/>
      <Btn title="click"/>
      <Btn title="Onnnnnn"/>
      <Btn title="get data"/>
      <Card title="iphone 15 pro" price="20000"/>
      <Card title="macbook m4 air" price="320000"/>
      <Card title="Audionic Airbuds" price="3000"/>
      <Card title="macbook m4 air" price="320000"></Card>
    </>
  )
}

export default App