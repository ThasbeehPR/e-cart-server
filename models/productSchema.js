//define schema for product    to define import mongoose
const mongoose = require('mongoose')

//using mongoose define schema
const productSchema = mongoose.Schema({
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
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    rating:{
        rate:{
            type:Number,
            required:true
        },
        count:{
            type:Number,
            required:true
        }
    }
})

//create model using the schema  //model name and collection name same aavanam here(products,that declare in database name)
const products = mongoose.model("products",productSchema)

//export model //model is collection
module.exports=products
