import { Link } from "react-router"

const Navbar = () => {
  return (
    <>
    <Link to={'/'}>Home</Link>
    <Link to={'/about'}>About</Link>
    <Link to={'/product'}>Product</Link>
    </>
  )
}

export default Navbar