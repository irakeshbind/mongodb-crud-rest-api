const express = require('express')
const app= express();

// import student routes
const studentRoutes= require('./routes/student.js');
const facultyRoutes =require('./routes/faculty.js')

// import mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://rakesh:123@cluster0.lydcv.mongodb.net/')

mongoose.connection.on('error',err=>{
    console.log('connection failed')
})

mongoose.connection.on('connected',connected=>{
    console.log('connected databaase')
})



// http://localhost:3000
// app.use((req,res,next)=>{
//     res.status(200).json({
//         message:"api is runing"
//     })



// error handling for bad url
 app.use((req,res,next)=>{
    res.status(404).json({
        error:"bad url or page not  fount"
    })
})






// routes use kia hai
app.use('/api',studentRoutes);
app.use('/api',facultyRoutes);



module.exports=app;

