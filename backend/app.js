const express = require('express')
const app= express();


// http://localhost:3000
app.use((req,res,next)=>{
    res.status(200).json({
        message:"api is runing"
    })
})


module.exports=app;

