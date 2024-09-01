const mongoose= require("mongoose")

const CatagoriesSchema =  new mongoose.Schema({
    name:{
        type:String,
        required:[true ,"Enter the name"]  
    },
    image:{
        type:String,
        required:[true ,"Enter the url"]
    }
})
  const catagory = mongoose.model('Catagory' , CatagoriesSchema)

  module.exports = catagory