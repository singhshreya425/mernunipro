const servicesmodel=require('../Models/servicesmodel')

module.exports.getServices=async(req,res)=>{
       const _data=await servicesmodel.find({})
       if(_data){
        return res.send({code:200,message:'success',data:_data})
       }else{
        return res.send({code:500,message:'service error'})
       }
}

module.exports.addServices=async (req,res)=>{
    const title=req.body.title
    const description =req.body.description
    if(!title||!description){
        return res.send({code:400,message:'Bad request'})
    }
    const newService=new servicesmodel({title:title,description:description})
    const success=await newService.save()
    if(success){
        return res.send({code:200,message:"add services",})
    }else{
        return res.send({code:500,message:'service error'})
    }
 
}