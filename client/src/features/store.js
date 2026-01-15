import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth/authSlice"
import admin from "./admin/adminSlice"
import shop from "./shop/shopSlice"
import product from "./product/productSlice"

const store = configureStore({
    reducer: { auth, admin, shop, product }
})


export default store