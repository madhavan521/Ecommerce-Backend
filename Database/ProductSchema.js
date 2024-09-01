const mongoose=require('mongoose')

const ProductSchema = mongoose.Schema({
    name:{
        type:String,
        require:[true, "Enter the name"]
    },
image1:{
    type:String,
    required:true
},
image2:{
    type:String,
    required:true
},image3:{
    type:String
},
description:{
    type:String,
    required:true
},
price:{
    type:Number,
    required:true
},
discount:{
    type:Number,
    required:true
},
features:{
    type:String,
    required:true
},
stock:{
    type:Number,
    required:true
},
catagory:{
    type:String,
    required:true
},
})

const product = mongoose.model('Product' ,ProductSchema)
 module.exports=product