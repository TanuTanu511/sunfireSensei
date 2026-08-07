import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import connectDB from './utils/db.js';
import userRoute from './routes/userRoute.js';
import companyRoute from './routes/companyRoute.js';
import jobRoute from './routes/jobRoute.js';
import applicationRoute from './routes/applicationRoute.js';
import dotenv from 'dotenv';
dotenv.config({});

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cookieParser());

const corsOption = {
    origin: ["http://localhost:5173"],
    credentials : true,
};
app.use(cors(corsOption));

let PORT = process.env.PORT || 5011;
//api's
app.use('/api/users' , userRoute);
app.use('/api/company' , companyRoute);
app.use('/api/job' , jobRoute);
app.use('/api/application' , applicationRoute);

app.listen(PORT, ()=>{
    connectDB();
    console.log(`server is running on ${PORT}`);
})