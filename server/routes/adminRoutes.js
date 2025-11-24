import express from "express"
import adminControllers from "../controllers/adminController.js"
import adminProtect from "../middleware/adminMiddleware.js"

const router = express.Router()


router.get("/users", adminProtect, adminControllers.getUsers)


export default router