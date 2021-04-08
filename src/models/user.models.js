const mongoose = require('mongoose')
const bcrypt = require('bcrypt')


const dataSchema = new mongoose.Schema({
    user_name:{type: String},
    email:{type: String},
    salario:{type:Number},
    senha_usuario:{type:String}

})

dataSchema.pre('save', function(next){
    if(!this.isModified('senha_usuario')){
        return next()
    }
    this.senha_usuario = bcrypt.hashSync(this.senha_usuario, 10)
    next()
})


const users = mongoose.model('Users', dataSchema)
module.exports = users