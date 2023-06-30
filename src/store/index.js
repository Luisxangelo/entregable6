import { configureStore } from "@reduxjs/toolkit";
import userinfo from "./slice/userinfo.slice";
import cart from "./slice/cartslice";


export default configureStore({
    reducer:{
        userinfo,
        cart
    }
})