const getCart = async (req, res) => {
    res.send("Cart is Here")
}
const addToCart = async (req, res) => {
    res.send("Added To Cart!")
}

const updateCart = async (req, res) => {
    res.send("Updated To Cart!")
}

const removeCart = async (req, res) => {
    res.send("Cart Removed!")
}


const cartController = { addToCart, updateCart, removeCart, getCart }

export default cartController