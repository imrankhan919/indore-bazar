import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth/authSlice"
import admin from "./admin/adminSlice"
import shop from "./shop/shopSlice"

const store = configureStore({
    reducer: { auth, admin, shop }
})


export default store