import fs from "node:fs"
import { v2 as cloudinary } from 'cloudinary';

// Configuration
cloudinary.config({
    cloud_name: 'dqdejbfnx',
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})



const uploadToCloudinary = async (fileLink) => {
    try {
        let response = await cloudinary.uploader.upload(fileLink, { resource_type: "auto" })
        return response
    } catch (error) {
        fs.unlinkSync(fileLink)
        console.log(error.message)
    }
}

export default uploadToCloudinary


