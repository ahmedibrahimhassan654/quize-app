const User=require('../models/user')
exports.createOrUpdateUser= async(req,res)=>{
 let {name}=req.body
//  name=req.body.user
try {

    const updatedUser=await User.findOneAndUpdate({name:req.body.name},{name},{new:true})
    if(updatedUser){
        res.json({
            
            success: true,
            updatedUser
        })
        console.log('old user updated',updatedUser);
    }else{
        const newUser=await User.create({name:req.body.name})
        res.json({
            
            success: true,
             newUser
        })
        console.log('new user created',newUser);
    }




 
} catch (err) {
    console.log(err);
}
 

    // res.json({
    //     data:'new user created'
    // })
}