import Shop from "../models/shopModel.js"

const addShop = async (req, res) => {

    const { name, description, address, shopPhone } = req.body
    let user = req.user.id

    if (!name || !description || !address || !shopPhone) {
        res.status(409)
        throw new Error('Please Fill All Details!')
    }

    const shop = await Shop.create({ name, description, address, shopPhone, user })

    if (!shop) {
        res.status(401)
        throw new Error("Shop Not Created!")
    }

    res.status(201).json({
        message: "Request Has Been Sent To Admin",
        shop
    })


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