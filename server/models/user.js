const mongoose= require('mongoose')

const {ObjectId}=mongoose.Schema


const userSchema=new mongoose.Schema({
    nanme:{
        type:String,
        required:true
    },
    // history:[{type:ObjectId,ref:'Quiz'}]
},{timestamps:true})


module.exports=mongoose.model('User',userSchema)