// import { useState } from "react"

// const App = () => {
//   const [counter , setCounter] = useState(0)

//   const addCounter = ()=>{
//     // setCounter((prevVal)=> prevVal + 1);
//     // setCounter((prevVal)=> prevVal + 1);
//     // setCounter((prevVal)=> prevVal + 1);
//     // setCounter((prevVal)=> prevVal + 1);
//     // setCounter((prevVal)=> prevVal + 1);
//     // setCounter(counter + 1);
//     // setCounter(counter + 1);
//     // setCounter(counter + 1);
//     // setCounter(counter + 1);
//   }
//   return (
//     <>
//       <h1>App {counter}</h1>
//       <button onClick={addCounter}>add</button>
//     </>
//   )
// }

// export default App



import { useState } from 'react'
import Card from './component/Card'

const App = () => {
  const [paraData , setParaData] = useState('')


  const getDataFromChildren = (data)=>{
    console.log('data receive from children ===> ' , data);

    setParaData(data)
    
  }
  return (
    <>
      <h1>Hello world</h1>
      <Card title={'Muhammad Abdullah'} func={getDataFromChildren}/>
      <p>{paraData}</p>
    </>
  )
}

export default App


// Dynamic route
// project
// redux
// firebase / supabase


// complete