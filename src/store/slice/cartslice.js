import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    products: [],
    isShowCart : false
}

const cartSlice = createSlice({
    initialState,
    name: "cart",
    reducers:{
        changeIsShowCart:(state) =>{
            state.isShowCart = !state.isShowCart
        }
    }
})

export const {changeIsShowCart} = cartSlice.actions

export default cartSlice.reducer