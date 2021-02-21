const express=require('express')

const router=express.Router()


router.get('/',(req,res)=>{
    res.json({
        data:'tester regest his name'
    })
})


module.exports=router