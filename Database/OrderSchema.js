const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    image:{
        type:String,
        required:[true , "Enter the image url"],
    },
  name:{
        type:String,
        required :[true ,"Enter the Descrption"],
    },
    address:{
        type:String,
        required :[true ,"Enter the Addresss"],
    },

    price:{
        type:Number,
        required : [true, "enter the price"]
    }
})

const order = mongoose.model('Order' , orderSchema)

module.exports = order