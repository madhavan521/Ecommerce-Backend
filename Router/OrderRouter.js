const express = require('express')
const orderrouter = express.Router()
const order = require('../Database/OrderSchema')
// Posting data
orderrouter.post('/order' , async(req,res)=>{
    const { image,name,address,price}=req.body
    try{
        const neworder = new order({image ,name,address,price})
    await neworder.save()
    console.log(neworder)  
    res.status(200).send(neworder) 
}
    catch(err){
        console.log(err)
        res.status(500).send(err)
}
})

orderrouter.get('/order',async(req,res)=>{
    try{
            const getdata = await order.find({})
            res.status(200).send(getdata)

    }
    catch(err){
        res.status(500).send(err)
    }
})
orderrouter.get('/order/:id', async(req,res)=>{
    const {id}=req.params
try{
    const getitem = await order.findById(id)
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

orderrouter.delete('/order/:id', async(req,res)=>{
    const {id}=req.params
try{
    const deleteitem = await order.findByIdAndDelete(id)
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

module.exports = orderrouter