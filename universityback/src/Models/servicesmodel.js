const mongoose=require('mongoose')

module.exports=mongoose.model('Services',{
    email:String,
   description:String
    
})