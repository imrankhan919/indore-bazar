import express from "express"
import protect from "../middleware/authMiddleware.js"
import cartController from "../controllers/cartController.js"


const router = express.Router()


router.get("/", protect.forAuthUsers, cartController.getCart)
router.post("/", protect.forAuthUsers, cartController.addToCart)
router.put("/:cid", protect.forAuthUsers, cartController.updateCart)
router.delete("/:cid", protect.forAuthUsers, cartController.removeCart)


export default router