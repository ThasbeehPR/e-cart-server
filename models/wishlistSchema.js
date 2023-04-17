//define schema for product    to define import mongoose
const mongoose = require('mongoose')

//using mongoose define schema
const wishlistSchema = mongoose.Schema({
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
    }
    
})

//create model using the schema  //model name and collection name same aavanam here(products,that declare in database name)
const wishlists = mongoose.model("wishlists",wishlistSchema)

//export model //model is collection
module.exports=wishlists
