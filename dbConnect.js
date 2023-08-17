const mongoose=require('mongoose')
const URL="mongodb+srv://maneesh:maneesh%4045@cluster0.fbpbuuk.mongodb.net/CarRentals"
mongoose.connect(URL)
let connectionobj=mongoose.connection;
connectionobj.on('connected',()=>{
    
    console.log("Mongodb Connected")
})
connectionobj.on('error',()=>{
    console.log('Error in connecting')

})