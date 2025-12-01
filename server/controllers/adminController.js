import Order from "../models/orderModel.js"
import User from "../models/userModel.js"

const getUsers = async (req, res) => {
    const users = await User.find()

    if (!users) {
        res.status(404)
        throw new Error('Users Not Found!')
    } else {
        res.status(200).json(users)
    }
}

const getAllOrders = async (req, res) => {
    const allOrders = await Order.find()

    if (!allOrders) {
        res.status(404)
        throw new Error("Orders Not Found!")
    }


    res.status(200).json(allOrders)

}

const updateUser = async (req, res) => {

    if (!req.body.isActive) {
        res.status(409)
        throw new Error('Please Send Status Of User')
    }

    const updatedUser = await User.findByIdAndUpdate(req.params.uid, { isActive: req.body.isActive }, { new: true })

    if (!updatedUser) {
        res.status(409)
        throw new Error('UserNot Updated')
    }

    res.status(200).json(updatedUser)

}

const updateShop = async (req, res) => {
    res.send("Shop Updated!")
}

const createShop = async (req, res) => {
    res.send("Shop Created!")
}



const adminControllers = { getUsers, getAllOrders, updateShop, updateUser, createShop }


export default adminControllers