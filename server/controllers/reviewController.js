import Review from "../models/reviewModel.js"

const getReviews = async (req, res) => {

    const productId = req.pid


    let reviews = await Review.find({ product: productId })

    if (!reviews) {
        res.status(404)
        throw new Error("Reviews Not Found")
    }

    res.status(200).json(reviews)

}


const addReview = async (req, res) => {
    res.send("Add Review")
}

const removeReview = async (req, res) => {
    res.send("Review Removed!")
}


const reviewController = { getReviews, addReview, removeReview }

export default reviewController