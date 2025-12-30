import axios from "axios"

const API_URL = '/api/shop-owner'


const fetchShopDetails = async (token) => {

    const options = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, options)
    return response.data

}


const fetchAllProducts = async (shopId) => {
    const response = await axios.get("/api/products")

    const data = response.data.filter((product) => {
        if (product.shop._id === shopId) {
            return true
        }
    })

    return data

}


const fetchAllOrders = async (token) => {
    const options = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(`${API_URL}/order`, options)
    return response.data
}


const fetchAllCoupons = async (shopId, token) => {
    const options = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(`/api/coupons/${shopId}`, options)
    return response.data
}


const createProduct = async (formData, token) => {

    console.log(...formData)

    const options = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(`${API_URL}/add-product`, formData, options)
    console.log(response.data)
    return response.data
}



const shopService = { fetchShopDetails, fetchAllProducts, fetchAllOrders, fetchAllCoupons, createProduct }


export default shopService