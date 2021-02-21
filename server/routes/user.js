const express=require('express')

const router=express.Router()
const {createOrUpdateUser}=require('../controller/user')


router.post('/',createOrUpdateUser)


module.exports=router