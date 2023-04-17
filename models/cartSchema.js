//define schema for cart    to define
// import mongoose
const mongoose = require('mongoose')

//using mongoose define schema
const cartSchema = mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    title:{
        type : String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    
    image:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true 
    },
    grantTotal:{
        type:Number,
        required:true
    }
    
})

//create model using the schema  //model name and collection name same aavanam here(products,that declare in database name)
const cartitems = mongoose.model("cartitems",cartSchema)

//export model //model is collection
module.exports=cartitems
