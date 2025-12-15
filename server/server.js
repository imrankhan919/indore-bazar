import express from "express"
import colors from "colors"
import { connectDB } from "./config/dbConfig.js"

// Local Imports
import { errorHandler } from "./middleware/errorHandler.js"
import authRoutes from "./routes/authRoutes.js"
import adminRoutes from "./routes/adminRoutes.js"
import shopOwnerRoutes from "./routes/shopOwnerRoutes.js"
import productRoutes from "./routes/productRoutes.js"
import cartRoutes from "./routes/cartRoutes.js"
import orderRoutes from "./routes/orderRoutes.js"
import shopRoutes from "./routes/shopRoutes.js"
import couponRoutes from "./routes/couponRoutes.js"
import chatBotRoutes from "./routes/chatBotRoutes.js"

const app = express()
const PORT = process.env.PORT || 5000

// DB Connection
connectDB()

// Body-Parser
app.use(express.json())
app.use(express.urlencoded())


app.get("/", (req, res) => {
    res.status(200)
    res.json({
        message: "WELCOME TO INDORE BAZAR API 1.00"
    })
})


// Auth Routes
app.use("/api/auth", authRoutes)

// Admin Routes
app.use("/api/admin", adminRoutes)

// Shop Owner Routse
app.use("/api/shop-owner", shopOwnerRoutes)

// Product Routes
app.use("/api/products", productRoutes)

// Cart Routes
app.use("/api/cart", cartRoutes)

// Order Routes
app.use("/api/orders", orderRoutes)

// Shop Routes
app.use("/api/shops", shopRoutes)

// Coupon Routes
app.use("/api/coupons", couponRoutes)

// Chat Bot Routes
app.use("/api/chat", chatBotRoutes)

// Error Handler
app.use(errorHandler)

app.listen(PORT, () => console.log(`SERVER IS RUNNING AT PORT : ${PORT}`.bgBlue.black))