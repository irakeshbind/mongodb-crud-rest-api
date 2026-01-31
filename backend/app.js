const express = require('express')
const app= express();

const studentRoutes= require('./routes/student.js')
// http://localhost:3000
// app.use((req,res,next)=>{
//     res.status(200).json({
//         message:"api is runing"
//     })
// })


app.use('/api',studentRoutes);


module.exports=app;

