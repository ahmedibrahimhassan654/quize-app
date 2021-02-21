const express=require('express')

const router=express.Router()
const {getAllQuestions}=require('../controller/quize')

router.get('/allq',getAllQuestions)


module.exports=router