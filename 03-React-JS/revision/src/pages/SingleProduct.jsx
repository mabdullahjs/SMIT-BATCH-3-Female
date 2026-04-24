import { useParams } from "react-router"
import useFetch from "../hooks/useFetch"

const SingleProduct = () => {
    const { id } = useParams()
    const [data, loading, error] = useFetch(`https://fakestoreapi.com/products/${id}`)
    
    return (
        <>
            <div>SingleProduct {id}</div>
            {loading && <h1>Loading...</h1>}
            {error && <h1>error occured...</h1>}
            {data && <div>
                <img src={data.image} alt={data.title} />
                <h3>{data.title}</h3>
                </div>}
        </>
    )
}

export default SingleProduct