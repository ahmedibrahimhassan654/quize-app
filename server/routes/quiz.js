const express=require('express')

const router=express.Router()
const {
    getAllQuestions,
    creatNewQuestion
}=require('../controller/quize')

router.get('/allq',getAllQuestions)
router.post('/newq',creatNewQuestion)

module.exports=router