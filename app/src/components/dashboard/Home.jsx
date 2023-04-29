import { Link } from "react-router-dom"
import { UserContext } from "../../assets/context/Context"
 import { useContext } from "react"

const Home = () => {
    const name=useContext(UserContext)
  return (
    <>{name}+ +Home
    <Link to='/'>Home</Link>
    <Link to='/recomendation'>About</Link>
    <Link to='/podcast'>Contact</Link>
    
    
    </>
  )
}

export default Home