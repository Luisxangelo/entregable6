import { Link } from "react-router-dom"

const Header = () => {


  return (
    <header>
      <Link to="/">e-Commerce</Link>

      <nav>
        <Link to="/login"><i className='bx bx-user'></i></Link>
        <Link to="/purchases"><i className='bx bx-box'></i></Link>
        <button><i className='bx bx-cart'></i></button>
      </nav>
    </header>
  )
}

export default Header