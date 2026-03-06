// import React, { useEffect, useState } from 'react'

// const Users = () => {
//     // states
//     const [counter, setCounter] = useState(0)
//     const [secondcounter, setsecondCounter] = useState(0)

//     // use effect for api call
//     useEffect(() => {
//         console.log("Component mounted");


//         return ()=>{
//             console.log("User component unmounted");

//         }

//     } , [secondcounter])
//     return (
//         <>
//             <h1>Users</h1>
//             <h1>first counter{counter}</h1>
//             <h1>second counter{secondcounter}</h1>
//             <button onClick={()=>setCounter(counter + 1)}>add counter</button>
//             <button onClick={()=>setsecondCounter(secondcounter + 1)}>add second counter</button>
//         </>
//     )
// }

// export default Users


// // useeffect
// // dependency array


// // DA agar nahi di to har state change pa component mount hoga.
// // DA agar dedi to sirf aik dafa mount hoga.



import React, { useEffect, useState } from 'react'

const Users = () => {
    const [data , setData] = useState(null)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(res => {
                console.log(res)
                setData(res)
            })
            .catch(err => {
                console.log(err);

            })
    }, [])
    return (
        <>
        <h1>Users</h1>
        {data ? data.map(item => {
            return <h1 key={item.id}>{item.name}</h1>
        }): <h1>Loading...</h1>}
        </>
    )
}

export default Users

// loading / error / &&



// false
// 0
// -0
// 0n
// ""
// null
// undefined
// NaN