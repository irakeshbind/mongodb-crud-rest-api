const express = require('express')
const app= express();

// import student routes
const studentRoutes= require('./routes/student.js')
// http://localhost:3000
// app.use((req,res,next)=>{
//     res.status(200).json({
//         message:"api is runing"
//     })
// })


// routes use kia hai
app.use('/api',studentRoutes);


module.exports=app;

