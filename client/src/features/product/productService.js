import axios from "axios"

const fetchProducts = async () => {
    const response = await axios.get("/api/products")
    return response.data
}

const fetchProduct = async (pid) => {
    const response = await axios.get("/api/products/" + pid)
    return response.data
}

const fetchShops = async () => {
    const response = await axios.get("/api/shops")
    return response.data
}


const productService = { fetchProducts, fetchProduct, fetchShops }

export default productService