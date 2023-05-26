import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./reducer/productSlice";
import detailSlice from "./reducer/detailSlice";
import cartSlice from "./reducer/cartSlice";
import loginSlice from "./reducer/loginSlice";
import profileSlice from "./reducer/profileSlice";


const store = configureStore({
    reducer: {
        productSlice,
        detailSlice,
        cartSlice,
        loginSlice,
        profileSlice
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch