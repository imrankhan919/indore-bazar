const addShop = async (req, res) => {
    res.send("Request For Shop Creation!")
}

const updateShop = async (req, res) => {
    res.send("Update Shop!")
}


const addProduct = async (req, res) => {
    res.send("Product Added!")
}


const updateProduct = async (req, res) => {
    res.send("Product Updated!")
}


const updateOrder = async (req, res) => {
    res.send("Update Order")
}


const shopOwnerController = { addProduct, addShop, updateOrder, updateProduct, updateShop }

export default shopOwnerController