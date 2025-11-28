const getMyOrders = async (req, res) => {
    res.send("My All Orders here...")
}

const getMyOrder = async (req, res) => {
    res.send("My Order here...")
}

const createOrder = async (req, res) => {
    res.send("My Order Creatd...")
}
const cancelOrder = async (req, res) => {
    res.send("My Order Cancelled...")
}


const orderController = { getMyOrders, getMyOrder, createOrder, cancelOrder }

export default orderController