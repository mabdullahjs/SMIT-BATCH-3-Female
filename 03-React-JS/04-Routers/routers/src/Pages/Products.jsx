// import React, { useEffect, useState } from 'react'
// import Cards from '../component/Cards';

// function Products() {
//     const [data, setData] = useState([]);
//     const [error, setError] = useState(false);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         fetch('https://fakestoreapi.com/products')
//             .then(res => res.json())
//             .then((res) => {
//                 setData(res);
//             })
//             .catch(() => {
//                 setError(true)
//             })
//             .finally(() => {
//                 setLoading(false)
//             })
//     }, [])

//     return (
//         <>
//             {loading && <h1>Loading..</h1>}
//             {error && <h1>Error</h1>}



//             {data.length > 0 && data.map(item => {
//                 return (
//                     <Cards
//                         key={item.id}
//                         title={item.title}
//                         price={item.price}
//                         des={item.description}
//                     />
//                 )
//             })}
//         </>
//     )
// }

// export default Products