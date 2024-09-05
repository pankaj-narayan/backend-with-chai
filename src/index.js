import dotenv from "dotenv";  // require('dotenv').config({path: './env'})
import connectDB from "./db/index.js";

dotenv.config({ path: './.env' });

// Check environment variables
console.log("MONGODB_URI:", process.env.MONGODB_URI);

// Connect to the database
connectDB();





//FIRST APPROACH
// import mongoose from 'mongoose';
// import { DB_NAME } from "./constants.js";

// import express from "express";
// const app =express()
// (async () => {
//     try{
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     app.on("error",(error)=>{
//         console.log("ERROR: ",error);
//         throw error
//     })

//     app.listen(process.env.PORT,()=>{
//         console.log(`App is listening on Port ${process.env.PORT}`);
//     })

//     }catch(error){
//         console.error("ERROR: ",error)
//         throw error
//     }
// })()