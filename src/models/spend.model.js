const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
   id_user:{type:String},
   value:{type:String},
   spend:{type:Number}

})

const spend = mongoose.model('Spend', dataSchema)
module.exports = spend