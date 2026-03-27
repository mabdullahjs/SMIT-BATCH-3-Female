// // conditional rendering
// // Prop
// // styling
// // Use effect (api call)
// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaRJS9aoNcHvShkUT3HLUpu7uTrCBOadE0XA&s

// // components


// // import { useState } from "react"

// // function App() {
// //   const [counter, setCounter] = useState(0)
// //   return (
// //     <>
// //       <h1>Hello world {counter}</h1>
// //       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. {counter} molestias blanditiis repellendus dolor quos modi laudantium {counter} {counter} impedit laborum. Sed porro natus quam libero repellendus {counter} vel ipsam facilis!</p>
// //       <button onClick={() => setCounter(counter + 1)}>add Counter {counter}</button>
// //     </>
// //   )
// // }

// // export default App



// // import React, { useState } from 'react'

// // const App = () => {

// //   const [show , setShow] = useState(false)

// //   const users = [
// //     {
// //       id: 1,
// //       name: "Ali",
// //       age: 22
// //     },
// //     {
// //       id: 2,
// //       name: "Sara",
// //       age: 25
// //     },
// //     {
// //       id: 3,
// //       name: "Ahmed",
// //       age: 30
// //     }
// //   ];

// //   console.log(users);
// //   return (
// //     <>
// //       <h1>User Data</h1>
// //       <button onClick={()=>setShow(!show)}>{show ? 'hide' : 'show'} Data</button>

// //       {show ? users.map(item => {
// //         return <h1 key={item.id}>{item.name}</h1>
// //       }): null}
// //     </>
// //   )
// // }

// // export default App


// // ()=>setShow(show === true ? false : true)



// // import React, { useState } from 'react'

// // const App = () => {
// //   const [bulb, setBulb] = useState(false)
// //   return (
// //     <>
// //       <h1>Bulb</h1>

// //       <button onClick={()=> setBulb(!bulb)}>Bulb {bulb ? 'off' : 'On'}</button> <br /><br />

// //       {bulb ? <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqYP8qYAbhKk52klGvW3MaCPqw4H7NZmP5XQ&s" width={300} alt="" /> :  <img src="http://toppng.com/uploads/preview/light-bulb-on-off-png-115539402943y50vxr5yi.png" width={300} alt="" />}
// //     </>
// //   )
// // }

// // export default App



// import React from 'react'
// import './App.css'

// const App = () => {
//   return (
//     <>
//       <h1>Hello styling</h1>
//       <h2 style={{
//         textAlign: 'center',
//         backgroundColor: 'red',
//         color: 'white'
//       }}>Hello internal styling</h2>
//       <h3 className='text-center bg-amber-400 hover:bg-amber-700 text-white text-2xl cursor-pointer'>hello tailwind</h3>
//     </>
//   )
// }

// export default App




// import React, { useState } from 'react'
// import Users from './component/Users'

// const App = () => {
//   const [comp , setComp] = useState(false)
//   return (
//     <>
//       <div>App</div>
//       <button onClick={()=>setComp(!comp)}>{comp ? 'show' : 'hide'}</button>
//       {!comp ? <Users/> : null}
//     </>
//   )
// }

// export default App


import React from 'react'
import Users from './component/Users'

const App = () => {
  return (
    <>
      <h1>Hello world</h1>
      <Users/>
    </>
  )
}

export default App