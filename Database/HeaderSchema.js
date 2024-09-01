const mongoose = require('mongoose')

const HeaderSchema = mongoose.Schema({
    image:{
        type:String,
        required:[true , "Enter the image url"],
    },
  description :{
        type:String,
        required :[true ,"Enter the Descrption"],
    }
})

const header = mongoose.model('Header' , HeaderSchema)

module.exports = header