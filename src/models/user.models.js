const mongoose = require('mongoose')



const dataSchema = new mongoose.Schema({
    user_name:String,
    email:String,
    salario:Number,
    senha_usuario:String
}, {
    timestamps: true

})



const users = mongoose.model('Users', dataSchema)
module.exports = users