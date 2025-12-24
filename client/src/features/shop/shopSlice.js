import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    shopLoading: false,
    shopSuccess: false,
    shopError: false,
    shopErrorMessage: "",
    shop: {},
    shopProducts: [],
    shopOrders: [],
    shopCoupons: []
}

const shopSlice = createSlice({
    name: "shop",
    initialState,
    reducers: {},
    extraReducers: (builder) => { }
});

export const { } = shopSlice.actions

export default shopSlice.reducer