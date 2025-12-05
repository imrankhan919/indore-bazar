import Coupon from "../models/couponModel.js"

const getCoupons = async (req, res) => {

    let shopId = req.params.sid

    const coupons = await Coupon.find({ shop: shopId })

    if (!coupons) {
        res.status(404)
        throw new Error('Coupon Not Found!')
    }

    res.status(200).json(coupons)

}


const couponController = { getCoupons }


export default couponController