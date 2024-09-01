const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({
    image:{
        type:String,
        required:[true , "Enter the image url"],
    },
  description :{
        type:String,
        required :[true ,"Enter the Descrption"],
    },
    price:{
        type:Number,
        // required : [true]
    }
})

const cart = mongoose.model('Cart' , cartSchema)

module.exports = cart