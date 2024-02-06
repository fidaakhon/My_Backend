import fs from "fs"
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: env.process.CLOUDINARY_NAME,
    api_key: env.process.CLOUDINARY_API_KEY,
    api_secret: env.process.CLOUDINARY_API_SECRET,
});


const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        //if local file exist
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        //file has been uploaded successfully
        console.log("file is uploaded on cloudinary", response.url)
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath) //remove the locally saved temporary file as the upload operation got failed
        return null
    }
}

export { uploadOnCloudinary }
