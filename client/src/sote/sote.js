import {configureStore} from "@reduxjs/toolkit"
import cart from "./slices/cartSlice"

const store = configureStore({
    reducer:{
        cartItems:cart
    }
})
export default store;