import { Link } from "react-router-dom"
import { changeIsShowCart } from "../../store/slice/cartslice"
import { useDispatch } from "react-redux"

const Header = () => {

  const dispatch = useDispatch()

  const handleClickShowCart = () => dispatch(changeIsShowCart())


  return (
    <header>
      <Link to="/">e-Commerce</Link>

      <nav>
        <Link to="/login"><i className='bx bx-user'></i></Link>
        <Link to="/purchases"><i className='bx bx-box'></i></Link>
        <button onClick={handleClickShowCart}><i className='bx bx-cart'></i></button>
      </nav>
    </header>
  )
}

export default Header