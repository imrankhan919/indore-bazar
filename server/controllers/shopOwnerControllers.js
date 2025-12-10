import Coupon from "../models/couponModel.js"
import Order from "../models/orderModel.js"
import Product from "../models/productModel.js"
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

    const { name, description, price, stock, category, shopId } = req.body

    if (!name || !description || !price || !stock || !category) {
        res.status(409)
        throw new Error("Please Fill All Details!")
    }

    const product = new Product({
        name, description, price, stock, category, productImage: req.file.path, shop: shopId
    })

    await product.save()

    await product.populate("shop")

    if (!product) {
        res.status(409)
        throw new Error('Product Not Created!')
    }


    res.status(201).json(product)
}


const updateProduct = async (req, res) => {

    const updatedProduct = await Product.findByIdAndUpdate(req.params.pid, req.body, { new: true }).populate('shop')

    if (!updatedProduct) {
        res.status(409)
        throw new Error('Product Not Updated!')
    }

    res.status(200).json(updatedProduct)


}


const createCoupon = async (req, res) => {

    const userId = req.user._id

    const { couponCode, couponDiscount } = req.body

    if (!couponCode || !couponDiscount) {
        res.status(409)
        throw new Error("Please Enter All Fields!")
    }

    // Find My Shop
    const shop = await Shop.findOne({ user: userId })


    const coupon = new Coupon({
        couponCode: couponCode.toUpperCase(),
        couponDiscount,
        shop: shop._id
    })

    await coupon.save()

    await coupon.populate("shop")


    if (!coupon) {
        res.status(409)
        throw new Error("Coupon Not Created")
    }

    res.status(201).json(coupon)

}

const getMyShopOrders = async (req, res) => {

    let userId = req.user._id

    let shop = await Shop.findOne({ user: userId })

    if (!shop) {
        res.status(404)
        throw new Error("Shop Not Found")
    }

    let myAllOrders = await Order.find({ shop: shop._id }).populate("user").populate("cart").populate("coupon")

    if (!myAllOrders) {
        res.status(404)
        throw new Error("Orders Not Found!")
    }

    res.status(200).json(myAllOrders)

}



const updateOrder = async (req, res) => {

    let { status } = req.body

    if (!status) {
        res.status(409)
        throw new Error("Status Not Founs!")
    }

    const updatedOrder = await Order.findByIdAndUpdate(req.params.oid, { status: status }, { new: true }).populate("user").populate("cart").populate("coupon").populate("shop")

    if (!updatedOrder) {
        res.status(401)
        throw new Error("Order Not Updated")
    }

    res.status(200).json(updatedOrder)


}


const shopOwnerController = { addProduct, addShop, updateOrder, updateProduct, updateShop, createCoupon, getMyShopOrders }

export default shopOwnerController