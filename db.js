const mongoose = require("mongoose");

function connectDB(){

    const URL="mongodb+srv://maneesh:maneesh%4045@cluster0.fbpbuuk.mongodb.net/CarRentals"


    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose