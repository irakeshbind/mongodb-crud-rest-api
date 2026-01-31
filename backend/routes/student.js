const express =require('express')
const router = express.Router();


// get http://localhost:3000/api/student
router.get('/student',(req,res,nex)=>{
    res.status(200).json({
        message:"get routes student"
    })
})

// post http://localhost:3000/api/student
router.post('/student',(req,res,nex)=>{
    res.status(200).json({
        message:"post routes student"
    })
})



module.exports=router;
