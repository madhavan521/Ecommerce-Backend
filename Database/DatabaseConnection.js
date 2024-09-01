const mongoose =require('mongoose')

const DatabaseConnection=()=>{

 mongoose.connect('mongodb+srv://cmadhavan521:madhavan@cluster0.2d7kl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    console.log("Database Connected Successfully")
})
.catch((err)=>{
    console.log(err)
})   
}



module.exports = DatabaseConnection()