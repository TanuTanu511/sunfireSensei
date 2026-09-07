import { v2 as cloudinary } from 'cloudinary';

import dotenv from "dotenv";
dotenv.config();

cloudinary.config({ 
        CLOUD_NAME: process.env.CLOUD_NAME, 
        CLOUD_API:process.env.CLOUD_API,
        API_SECRET: process.env.API_SECRET,
    });

export default cloudinary;