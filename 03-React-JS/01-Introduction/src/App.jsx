// // import Card from "./Card"

// // function App() {
// //   let username = "Mabdullah"
// //   let num = 20
// //   return (
// //     <>
// //       <h1>Hello App component {username}</h1>
// //       <p>Lorem {num + 100} ipsum dolor sit amet consectetur adipisicing elit. Voluptate libero velit, voluptas neque iusto itaque ratione veritatis quaerat soluta laborum facere facilis praesentium maxime error harum odit dolorum nobis? Sunt?</p>
// //       <Card/>
// //     </>
// //   )
// // }

// // export default App


// // //  <> React fragments


// import React, { useState } from 'react'
// import './App.css'

// const App = () => {

//   // let counter = 0
//   let [counter , setCounter] = useState(0)

//   const addCounter = ()=>{
//     // counter += 1;
//     // console.log(counter);
//     console.log("counter added");
//     setCounter(counter + 1)

//   }
//   return (
//     <>
//       <h1>Counter App</h1>
//       <div className="container">
//         <button>-</button>
//         <h1>{counter}</h1>
//         <button onClick={addCounter}>+</button>
//       </div>
//     </>
//   )
// }

// export default App



// import React from 'react'
// import './App.css'
// import Card from './Card'

// const App = () => {
//   return (
//     <>
//       <h1>Hello world</h1>
//       <Card />
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt natus quae officia doloribus veritatis. Non, sint. Perspiciatis facere vero minima accusantium voluptate provident amet cupiditate officiis, incidunt expedita placeat dolores.</p>
//     </>

//   )
// }

// export default App


// JS modules (import / export)


// import React from 'react'

// const App = () => {
//   let num = 10;
//   let username = "Muhammad Abdullah";
//   return (
//     <>
//       <h1>Hello {username}</h1>
//       <p>Lorem ipsum dolor {num}, sit amet consectetur adipisicing elit. Quod, corporis.</p>
//     </>
//   )
// }

// export default App



// import React, { useState } from 'react'
// import './App.css'

// const App = () => {
//   // let counter = 0

//   // hook (react ka apna functions)
//   const [counter, setCounter] = useState(0)

//   const addCounter = () => {
//     console.log("add counter");
//     // counter += 1;
//     // counter = 100
//     setCounter(counter + 1)
//     console.log(counter);


//   }
//   const lessCounter = () => {
//     console.log("less counter");
//     counter > 0 ? setCounter(counter - 1) : alert("kiya chah rha ho")

//   }
//   return (
//     <>
//       <h1>Counter App {counter}</h1>
//       <div className="container">
//         <button onClick={lessCounter}>less</button>
//         <h1>{counter}</h1>
//         <button onClick={() => addCounter()}>add</button>
//       </div>

//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ea tempore aperiam voluptate a odit {counter}, adipisci eveniet ipsum illo similique quam cum iusto incidunt repellat {counter} quae ratione?</p>

//     </>
//   )
// }

// export default App




import React, { useState } from 'react'
import './App.css'


const App = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "first",
      description: "lorem ipsum"
    },
    {
      id: 2,
      title: "second",
      description: "lorem ipsum"
    },
    {
      id: 3,
      title: "third",
      description: "lorem ipsum"
    },
  ]);

  const addTodo = (event) => {
    event.preventDefault()
    console.log(title);
    console.log(description);

    todo.push({
      id: Date.now(),
      title, description
    })

    setTodo([...todo])

    console.log(todo);
    

  }


  const deleteTodo = (index)=>{
    console.log("todo deleted ===> " , index);
    todo.splice(index , 1)
    setTodo([...todo]);
    
  }
  const editTodo = (index)=>{
    console.log("todo edited ===> " , index);
    const updatedVal = prompt("enter updated value");
    todo[index].title = updatedVal
    setTodo([...todo])
    
  }
  return (
    <>
      <h1>Todo App</h1>


      <form onSubmit={addTodo}>
        <input type="text" placeholder='enter todo' value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder='description' value={description} onChange={e => setDescription(e.target.value)} />
        <button type='submit'>Add todo</button>
      </form>

      {todo.map((item , index) => {
        return <div key={item.id} className='todo-container'>
          <h5>Title: {item.title}</h5>
          <h5>Description: {item.description}</h5>

          <button onClick={()=> deleteTodo(index)}>Delete</button>
          <button onClick={()=> editTodo(index)}>Edit</button>
        </div>
      })}

    </>
  )
}

export default App



// conditional rendering
// api call (use effect)