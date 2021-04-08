const spends = require('../models/spend.model')
const routes = require('../routes')


module.exports = {
    async index(req, res){
        const spend = await spends.find()
        res.json(spend)
    },
    async create(req, res){
        const {id_user, desc, spend} = req.body
        let data = {id_user, desc, spend}
        let gastos = await spends.create(data)
        res.json(gastos)
    },
    async details(req,res){
        const{id_user} = req.params
        const spend = await spends.find({id_user})
        res.json(spend)
    },
    async delete(req, res){
        const{_id} = req.params
        const gastos = await spends.findByIdAndDelete({_id})
        res.json(gastos)
    }
}