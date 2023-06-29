import { configureStore } from "@reduxjs/toolkit";
import userinfo from "./slice/userinfo.slice";


export default configureStore({
    reducer:{
        userinfo
    }
})