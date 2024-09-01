const express = require('express')
const product = require('../Database/ProductSchema')
const productrouters = express.Router()

//Post Product data
productrouters.post ('/productdata' ,async(req,res)=>{
    const {name,image,oneimage,twoimage,description,price,discount,features,stock,catagory}=req.body
    try{
       const newProduct = new product({name,image,oneimage,twoimage,description,price,discount,features,stock,catagory})
    await newProduct.save() 
    res.status(200).send(newProduct) 
    }
     catch(err){
        res.status(500).send(err)
     }
})

productrouters.get('/productdata',async(req,res)=>{
    try{
            const getdata = await product.find({})
            res.status(200).send(getdata)

    }
    catch(err){
        res.status(500).send(err)
    }
})
productrouters.get('/productdata/:id', async(req,res)=>{
    const {id}=req.params
try{
    const getitem = await product.findById(id)
if(!getitem){
    res.status(404).send('Item not Found')
}
else{
res.status(201).send( getitem)
}
}
catch(err){
    res.status(500).send(err)
}
})
productrouters.put('/productdata/:id', async (req, res) => {  
    const update = req.body;  
    const { id } = req.params;  

    try {  
        const updatedItem = await product.findByIdAndUpdate(  
            id,  
            update, 
            { new: true, runValidators: true } 
        );  

        if (!updatedItem) {  
            res.status(404).send('Item not Found');  
        } else {  
            res.status(200).send(updatedItem);   
        }  
    } catch (err) {  
        res.status(500).send(err.message); 
    }  
});


productrouters.delete('/productdata/:id', async(req,res)=>{
    const {id}=req.params
try{
    const deleteitem = await product.findByIdAndDelete(id)
if(!deleteitem){
    res.status(404).send('Item not Found')
}
else{
res.status(201).send("Item Deleted Successfully")
}
}
catch(err){
    res.status(500).send(err)
}
})

module.exports =  productrouters

