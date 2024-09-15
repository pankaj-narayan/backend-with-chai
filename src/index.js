import dotenv from "dotenv";  // require('dotenv').config({path: './env'})
import connectDB from "./db/index.js";

dotenv.config({ path: './env' });

// Check environment variables
console.log("MONGODB_URI:", process.env.MONGODB_URI);

// Connect to the database
connectDB().then(()=>{
    app.on("error",(error)=>{
    console.log("ERROR: ",error);
    throw error
    })
    
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running on port :${process.env.PORT} `);
    })
})
.catch((err)=>{
    console.log("Mongo db connection failed !!! ", err);
    
})





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