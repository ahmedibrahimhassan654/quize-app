const express=require('express')
const mongoose=require('mongoose')
const morgan=require('morgan')
const bodyParser=require('body-parser')
const cors=require('cors')
require('dotenv').config()

//App
const app= express()

//DB
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:true,
    useUnifiedTopology: true
}).then(()=>console.log('DB Connected sucsesfuly '))
.catch(err=>console.log('DB Connection Err',err))



//middleware
app.use(morgan('dev'));
app.use(bodyParser.json({limit:'2mb'}));
app.use(cors());


//route




//server listen
const port=process.env.PORT||8000;

app.listen(port, () => {
    console.log('App listening sucsesfuly on port ',port);
});