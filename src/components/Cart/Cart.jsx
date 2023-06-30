import { useDispatch, useSelector } from "react-redux"
import { changeIsShowCart } from "../../store/slice/cartslice"

const Cart = () => {
    const {isShowCart} = useSelector((store) => store.cart)
    const {token} = useSelector((store) => store.userinfo)

    const dispatch = useDispatch()

    

    const handleClickChangeShowCart = () => dispatch(changeIsShowCart())

  return (
    <section className={`fixed top-0 bg-white h-screen ${isShowCart && token ? "right-0" : "-right-full"} w-[200px] transition-all duration-300 p-2 shadow-sm shadow-slate-400 grid grid-rows-[auto_1fr_auto] `}>
        <button onClick={handleClickChangeShowCart} className="absolute top-3 right-3 text-xl text-red-500"><i className="bx bxs-x-circle"></i></button>    
        <h3 className=" font-bold text-xl">Shopping Cart</h3>
        {/* productos del carro */}
        <section>

        
        </section>
        {/* precio final/total */}
        <section className="border-l-[1px] border-gray-400 p-4 grid grid-cols-2 gap-4">
            <span>total</span>
            <span className="text-end">$250</span>
            <button className="block w-full py-2 bg-red-500 text-white hover:bg-red-600 transition-colors col-span-2">CheckOut</button>

        </section>
    </section>
  )
}

export default Cart