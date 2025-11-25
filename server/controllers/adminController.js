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
    res.send('All Orders Here')
}

const updateUser = async (req, res) => {
    res.send("User Updated!")
}

const updateShop = async (req, res) => {
    res.send("Shop Updated!")
}

const createShop = async (req, res) => {
    res.send("Shop Created!")
}



const adminControllers = { getUsers, getAllOrders, updateShop, updateUser, createShop }


export default adminControllers