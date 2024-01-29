import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();


//Security middleware practice configuration
app.use(cors(
    {
        origin: `${process.env.CORS_ORIGIN}`,
        credentials: true
    }
)) //for cors
app.use(express.json(
    {
        limit: "16kb", 
    }
)); //for json data
app.use(express.urlencoded({ extended: true, limit: "16kb" })); //for url data
app.use(express.static("public")); //for static files
app.use(cookieParser()); //for cookies


export { app }