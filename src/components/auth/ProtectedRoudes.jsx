import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
import store from "../../store"

const ProtectedRoudes = () => {

const{token}= useSelector((store)=>store.userinfo)

    if(token){

        return <Outlet/>

    }else{
        return <Navigate to="/login"/>
        
    }


}

export default ProtectedRoudes