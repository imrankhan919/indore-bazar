import Cart from "../models/cartModel.js"
import Product from "../models/productModel.js"

const getCart = async (req, res) => {

    const userId = req.user._id

    const cart = await Cart.findOne({ user: userId })

    if (!cart) {
        res.status(200).json({
            products: []
        })
    }

    res.status(200).json(cart)



}
const addToCart = async (req, res) => {

    const { productId, qty = 1 } = req.body
    const userId = req.user._id

    // Validate product exists
    const product = await Product.findById(productId)

    if (!product) {
        res.status(404)
        throw new Error("Product Not Found!")
    }

    // Check id product in stock
    if (product.stock < qty) {
        res.status(400)
        throw new Error("Insufficient Stock")
    }

    // Find Users Cart
    let cart = await Cart.findOne({ user: userId })

    if (!cart) {
        // Create new cart if does not exist
        cart = new Cart({
            user: userId,
            products: [{ product: productId, qty }]
        })
    } else {
        // Check if product is already in cart
        const productIndex = cart.products.findIndex((item) => {
            return item.product.toString() === productId
        })

        console.log(productIndex)


        if (productIndex > -1) {
            // Update Quantity if product exists
            cart.products[productIndex].qty += parseInt(qty)

            // Check total quantity against stock
            if (cart.products[productIndex].qty > product.stock) {
                res.status(400)
                throw new Error("Quamtity Exceeds Avaialable Stock")
            }


        } else {
            // Add New Product To Cart
            cart.products.push({ product: productId, qty })
        }
    }

    await cart.save()

    // Populate Product Details For Response
    await cart.populate("products.product")

    res.status(200).json(cart)

}

const updateCart = async (req, res) => {
    res.send("Updated To Cart!")
}

const removeCart = async (req, res) => {
    res.send("Cart Removed!")
}


const cartController = { addToCart, updateCart, removeCart, getCart }

export default cartController