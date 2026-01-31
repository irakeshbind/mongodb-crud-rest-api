const express =require('express')
const router = express.Router();


// get http://localhost:3000/api/
router.get('/',(req,res,nex)=>{
    res.status(200).json({
        message:"get routes"
    })
})


// post http://localhost:3000/api/
router.post('/',(req,res,nex)=>{
    res.status(200).json({
        message:"post routes"
    })
})

module.exports=router;
