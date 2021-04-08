const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
   id_user:String,
   desc:String,
   spend:Number
},{
   timestamps:true

});

const spend = mongoose.model('Spend', dataSchema)
module.exports = spend