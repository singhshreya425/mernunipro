//<------------------------< Importing : Packages >---------------------->//
const express = require('express');
const bodyParser=require("body-parser")
const mongoose = require('mongoose');
const cors =require("cors")
const servicescontroller=require('./Controllers/servicescontroller')

//<------------------------< Importing : Module >------------------------>//
 const route = require('./Routes/routes');

const app=express();
const port = process.env.PORT || 3001;
const url ="mongodb+srv://singhshreya425:shreyasingh1234@cluster0.yxxvuvg.mongodb.net/shreya526";
mongoose.set('strictQuery', true);

app.use(express.json());
app.use(cors())


app.get('/hello',(req,res)=>{
    return res.send('Hello')
})

app.post('/api/services',servicescontroller.addServices)
app.get('/api/services',servicescontroller.getServices)

mongoose.connect(url)
.then(() => console.log("MongoDb is Connected"))
.catch((err) => console.log(err));

 app.use('/',route);

app.listen(port, () => console.log(`Server is Running Succesfully ${port}`));