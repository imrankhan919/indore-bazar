import express from "express"
import shopOwnerController from "../controllers/shopOwnerControllers.js"
import protect from "../middleware/authMiddleware.js"


const router = express.Router()


// Create Shop
router.post("/create-shop", protect.forAuthUsers, shopOwnerController.addShop)

// Add Product
router.post("/add-product", protect.forAuthUsers, shopOwnerController.addProduct)

// Update Order
router.put("/order/:oid", protect.forAuthUsers, shopOwnerController.updateOrder)

// Update Product
router.put("/product/:pid", protect.forAuthUsers, shopOwnerController.updateProduct)

// Update Shop
router.put("/shop/:sid", protect.forAuthUsers, shopOwnerController.updateShop)


export default router