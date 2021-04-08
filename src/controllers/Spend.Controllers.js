const spends = require('../models/spend.model')
const routes = require('../routes')
const { index } = require('./User.Controller')

module.exports = {
    async index(req, res){
        const spend = await spends.find()
        res.json()
    },
    async create(req, res){
        const {id_user, value, spend} = req.body
        let data = {id_user, value, spend}
        let spend = await spends.create(data)
        res.json(spend)
    }
}