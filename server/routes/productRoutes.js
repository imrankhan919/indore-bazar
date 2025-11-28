import express from "express"
import productController from "../controllers/productController.js"

const router = express.Router()

router.get("/", productController.getProducts)
router.get("/:pid", productController.getProduct)
router.get("/search/:query", productController.searchProduct)


export default router