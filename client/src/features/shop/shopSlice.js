import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import shopService from './shopService';

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
    extraReducers: (builder) => {
        builder
            .addCase(getMyShopDetails.pending, (state, action) => {
                state.shopLoading = true
                state.shopSuccess = false
                state.shopError = false
            })
            .addCase(getMyShopDetails.fulfilled, (state, action) => {
                state.shopLoading = false
                state.shopSuccess = true
                state.shop = action.payload
                state.shopError = false
            })
            .addCase(getMyShopDetails.rejected, (state, action) => {
                state.shopLoading = true
                state.shopSuccess = false
                state.shopError = true
                state.shopErrorMessage = action.payload
            })
            .addCase(getAllProducts.pending, (state, action) => {
                state.shopLoading = true
                state.shopSuccess = false
                state.shopError = false
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.shopLoading = false
                state.shopSuccess = true
                state.shopProducts = action.payload
                state.shopError = false
            })
            .addCase(getAllProducts.rejected, (state, action) => {
                state.shopLoading = true
                state.shopSuccess = false
                state.shopError = true
                state.shopErrorMessage = action.payload
            })
            .addCase(getMyShopOrders.pending, (state, action) => {
                state.shopLoading = true
                state.shopSuccess = false
                state.shopError = false
            })
            .addCase(getMyShopOrders.fulfilled, (state, action) => {
                state.shopLoading = false
                state.shopSuccess = true
                state.shopOrders = action.payload
                state.shopError = false
            })
            .addCase(getMyShopOrders.rejected, (state, action) => {
                state.shopLoading = true
                state.shopSuccess = false
                state.shopError = true
                state.shopErrorMessage = action.payload
            })
            .addCase(getAllCoupons.pending, (state, action) => {
                state.shopLoading = true
                state.shopSuccess = false
                state.shopError = false
            })
            .addCase(getAllCoupons.fulfilled, (state, action) => {
                state.shopLoading = false
                state.shopSuccess = true
                state.shopCoupons = action.payload
                state.shopError = false
            })
            .addCase(getAllCoupons.rejected, (state, action) => {
                state.shopLoading = true
                state.shopSuccess = false
                state.shopError = true
                state.shopErrorMessage = action.payload
            })
    }
});

export const { } = shopSlice.actions

export default shopSlice.reducer



// Fetch My Shop Details
export const getMyShopDetails = createAsyncThunk("FETCH/SHOP/DETAILS", async (_, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token
    try {
        return await shopService.fetchShopDetails(token)
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }

})

// Fetch All Products
export const getAllProducts = createAsyncThunk("FETCH/PRODUCTS", async (_, thunkAPI) => {

    let shopId = thunkAPI.getState().shop.shop._id

    try {
        return await shopService.fetchAllProducts(shopId)
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }

})


// Fetch My Shop Details
export const getMyShopOrders = createAsyncThunk("FETCH/SHOP/ORDERS", async (_, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token
    try {
        return await shopService.fetchAllOrders(token)
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }

})


// Fetch All Shop Coupons
export const getAllCoupons = createAsyncThunk("FETCH/SHOP/COUPONS", async (_, thunkAPI) => {

    let shopId = thunkAPI.getState().shop.shop._id

    try {
        return await shopService.fetchAllCoupons(shopId)
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }

})
