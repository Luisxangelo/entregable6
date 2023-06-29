import axios from "axios"
import { useForm } from "react-hook-form"
import { loginUser, logout, setUserInfo } from "../store/slice/userinfo.slice"
import { useDispatch, useSelector } from "react-redux"

const Login = () => {

    const {token,user} =useSelector((store)=>store.userinfo)

    const dispatch =useDispatch()

    const{register, handleSubmit} = useForm()

    const submit = (dataForm) => {
             dispatch(loginUser(dataForm))
    }
    const handleClickLogout = () =>{
        dispatch(logout())
    }


  return (
    <section className="bg-gray-100 grid place-content-center px-2" >

        {
            token? (<section className=" bg-white rounded-xl p-4 w-[300px] grid gap-6 text-center"> 

                <i className='bx bxs-user-circle text-center text-8xl  '></i>
                <span>{user.firstName} {user.lastName}</span>
                <button onClick={handleClickLogout}  className="bg-red-500 hover:bg-red-400 text-white rounded-md w-full h-12 transition-colors">Logout</button>

            </section>) : (

    <form onSubmit={handleSubmit(submit)} className="bg-white rounded-xl p-4 max-w-[350px] grid gap-6">
        <h3 className=" font-semibold text-xl">Welcome! Enter your email and password to continue</h3>

        <section className="bg-[#D8F5FD] p-4 rounded-md py-2" >
            <h5 className="text-center font-bold mb-4">Test Data</h5>
            <div className="flex items-center gap-2">
                <i className='bx bx-envelope text-xl'></i>
                <span>john@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
                <i className='bx bx-lock-alt text-xl'></i>
                <span>john1234</span>
            </div>
        </section>

        <div className="grid gap-2">
            <label className="text-sm" htmlFor="email">Email</label>
            <input {...register("email")} className="border-[1px] border-gray-300 outline-none p-2 rounded-sm" id="email" type="email" />
        </div>
        <div className="grid gap-2">
            <label className="text-sm" htmlFor="password">Password</label>
            <input {...register("password")} className="border-[1px] border-gray-300 outline-none p-2 rounded-sm" id="password" type="password" />
        </div>
        <button className="block w-full py-2 bg-red-500 text-white hover:bg-red-600 transition-colors">Login</button>
        <span className="text-sm">Don't have an account? Sign up</span>

    </form>)}

    </section>
  )
}

export default Login