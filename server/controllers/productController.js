const getProducts = async (req, res) => {
    res.send("All Products")
}

const getProduct = async (req, res) => {
    res.send("Single Product")
}


const searchProduct = async (req, res) => {
    res.send("Cheese Here")
}

const productController = { getProduct, getProducts, searchProduct }


export default productController