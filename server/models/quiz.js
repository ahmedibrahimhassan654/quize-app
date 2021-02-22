const mongoose= require('mongoose')

const  uuidv4  =require( "uuid");
const {ObjectId}=mongoose.Schema


const quizeSchema=new mongoose.Schema({
  
  
    question:{
        type:String
    },
    
    answers:{
        type:Array
    } ,
    correct: String,
   
   
},{timestamps:true})


module.exports=mongoose.model('Quiz',quizeSchema)