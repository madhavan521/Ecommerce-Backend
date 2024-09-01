const express =require('express')
const app=express()
require('dotenv').config()
const PORT = process.env.PORT
const cors = require('cors')
const headerrouter= require('./Router/HeaderRouter')
const catagoryrouter =require('./Router/CatagoryRouter')
const productrouters = require('./Router/ProductRouter')
const cartrouter = require('./Router/CartRouter')
const orderrouter =require('./Router/OrderRouter')

const DatabaseConnection =require('./Database/DatabaseConnection')
app.use(express.json())
app.use(cors())

app.use(headerrouter);
app.use(catagoryrouter);
 app.use(productrouters);
 app.use(cartrouter)
 app.use(orderrouter)




//Database Connection

DatabaseConnection;



// Server Connection 
app.listen(8000, ()=>{
    console.log(`Server started listening at ${PORT}` )
})
