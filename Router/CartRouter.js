const express = require('express')
const cartrouter = express.Router()
const cart = require('../Database/CartSchema')
// Posting data
cartrouter.post('/cart' , async(req,res)=>{
    const { image,description,price}=req.body
    try{
        const newcart = new cart({image ,description,price})
    await newcart.save()
    console.log(newcart)  
    res.status(200).send(newcart) 
}
    catch(err){
        console.log(err)
        res.status(500).send(err)
}
})

cartrouter.get('/cart',async(req,res)=>{
    try{
            const getdata = await cart.find({})
            res.status(200).send(getdata)

    }
    catch(err){
        res.status(500).send(err)
    }
})
cartrouter.get('/cart/:id', async(req,res)=>{
    const {id}=req.params
try{
    const getitem = await cart.findById(id)
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

cartrouter.delete('/cart/:id', async(req,res)=>{
    const {id}=req.params
try{
    const deleteitem = await cart.findByIdAndDelete(id)
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

module.exports = cartrouter