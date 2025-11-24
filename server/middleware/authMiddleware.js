import jwt from "jsonwebtoken"
import User from "../models/userModel.js"

const protect = async (req, res, next) => {

    try {

        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            let token = req.headers.authorization.split(" ")[1]

            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            const user = await User.findById(decoded.id).select("-password")

            if (!user) {
                res.status(400)
                throw new Error('You are not Authorised! : Invalid Token')
            }

            req.user = user
            next()
        }


    } catch (error) {
        res.status(400)
        throw new Error('You are not Authorised!')
    }


}

export default protect