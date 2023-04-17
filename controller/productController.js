//logic to get all products from mongodb                                    //we export routes ,before that  we get data from atlas that from internet that to call it is asyngronous fumction to call asynchronous we need to fetch or etc like that
                                                                            //callback argument is request and response
//import products collection                                                //products collects mongodb'enn idkann 'find'  //await use cheyth variable'leek assign cheyyan pattum
const products = require('../models/productSchema')

exports.getallproducts= async (req,res)=>{                    //export in router
    //logic
   try{ 
    const allproducts = await products.find()
    //send to client
    res.status(200).json(allproducts)
    }
    catch (error){
        res.status(401).json(error)
    }

}

//logic to get perticular product from mongodb
exports.viewproduct = async (req,res)=>{
    //get id of the product
    const id = req.params.id
    try{
    //logic
    const product = await products.findOne({id})
    //send product deatail to client
    res.status(200).json(product)

    }
    catch(error){
        res.status(401).json(error)
    }
}


