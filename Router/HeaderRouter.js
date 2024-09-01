const express = require('express')
const headerrouter = express.Router()
const header = require('../Database/HeaderSchema')
// Posting data
headerrouter.post('/header' , async(req,res)=>{
    const { image,description}=req.body
    try{
        const newheader = new header({image ,description})
    await newheader.save()
    console.log(newheader)  
    res.status(200).send(newheader) 
}
    catch(err){
        console.log(err)
        res.status(500).send(err)
}
})

headerrouter.get('/header',async(req,res)=>{
    try{
            const getdata = await header.find({})
            res.status(200).send(getdata)

    }
    catch(err){
        res.status(500).send(err)
    }
})
headerrouter.get('/header/:id', async(req,res)=>{
    const {id}=req.params
try{
    const getitem = await header.findById(id)
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

headerrouter.delete('/header/:id', async(req,res)=>{
    const {id}=req.params
try{
    const deleteitem = await header.findByIdAndDelete(id)
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

module.exports = headerrouter