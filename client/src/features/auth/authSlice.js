import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import authService from './authService';

let userExist = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user: userExist || null,
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ""
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state, action) => {
                state.isLoading = true
                state.isError = false
                state.isSuccess = false
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = true
                state.isError = true
                state.message = action.payload
                state.isSuccess = false
            })
            .addCase(loginUser.pending, (state, action) => {
                state.isLoading = true
                state.isError = false
                state.isSuccess = false
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = true
                state.isError = true
                state.message = action.payload
                state.isSuccess = false
            })
            .addCase(logoutUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.message = ""
                state.isSuccess = false
                state.user = null
            })
    }
});

export const { } = authSlice.actions

export default authSlice.reducer



// Register User
export const registerUser = createAsyncThunk("AUTH/REGISTER", async (formData, thunkAPI) => {
    try {
        return await authService.register(formData)
    } catch (error) {
        let message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})


// Login User
export const loginUser = createAsyncThunk("AUTH/LOGIN", async (formData, thunkAPI) => {
    try {
        return await authService.login(formData)
    } catch (error) {
        let message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})


// Logout User
export const logoutUser = createAsyncThunk("AUTH/LOGOUT", async () => {
    localStorage.removeItem("user")
})