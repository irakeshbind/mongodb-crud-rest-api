const express =require('express')
const router = express.Router();




// post http://localhost:3000/api/faculty
router.get('/faculty',(req,res,nex)=>{
    res.status(200).json({
        message:"post routes faculty"
    })
})


// post http://localhost:3000/api/faculty
router.post('/faculty',(req,res,nex)=>{
    res.status(200).json({
        message:"post routes faculty"
    })
})

module.exports=router;
