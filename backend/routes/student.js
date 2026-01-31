const express =require('express')
const router = express.Router();

router.get('/',(req,res,nex)=>{
    res.status(200).json({
        message:"get routes"
    })
})



router.post('/',(req,res,nex)=>{
    res.status(200).json({
        message:"post routes"
    })
})

module.exports=router;
