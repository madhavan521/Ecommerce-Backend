  const express= require('express')
  const catagoryrouter =  express.Router()
  const catagory = require('../Database/CatagoriesSchema')

  // posting data
   catagoryrouter.post('/cat' , async(req,res)=>{
    const {image,name }= req.body;

    try{
         const newCatagory = new catagory({image,name})
     await newCatagory.save()

     res.status(200).send(newCatagory)
      
    }
    catch(err){
        res.status(500).send(err)
    }  })

 // get data
 catagoryrouter.get('/cat', async (req, res) => {  
    try {  
        const getCatagory = await catagory.find({});  
        res.status(200).send(getCatagory);  
    } catch (err) {  
        res.status(500).send(err);  
    }  
});

//get by id
  catagoryrouter.get("/cat/:id" , async(req,res)=>{
    const {id} = req.params
    try{
          const getCatagory = await catagory.findById(id)


          if(!getCatagory){
                   res.status(404).send("Item not found")
          }
          else{
                      res.status(200).send(getCatagory)

          }
     
        
    }
    catch(err){
        res.status(500).send(err)
    }

  })   

  
  catagoryrouter.delete("/cat/:id" , async(req,res)=>{
    const {id} = req.params
    try{
          const deleteCatagory = await catagory.findByIdAndDelete(id)


          if(!deleteCatagory){
                   res.status(404).send("Item not found")
          }
          else{
                      res.status(200).send("Item Deleted Successfully")

          }
     
        
    }
    catch(err){
        res.status(500).send(err)
    }

  })   
    module.exports= catagoryrouter