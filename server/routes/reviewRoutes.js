import express from "express"
import reviewController from "../controllers/reviewController.js"



const router = express.Router()


router.get("/", reviewController.getReviews)
router.post("/", reviewController.addReview)
router.delete("/:rid", reviewController.removeReview)

export default router