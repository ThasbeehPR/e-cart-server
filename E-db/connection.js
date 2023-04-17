//define connection between node and mongodb using mongoose

//import mongoose

const mongoose = require('mongoose')

//get connection string from env
const DB = process.env.DATABASE

//connect mongodb    //response in then if not catch
mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("Cart Database connect Successfully");
}).catch((error)=>{
    console.log(error);
})