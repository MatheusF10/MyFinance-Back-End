const users = require('../models/user.models')

module.exports = {
    async index(req, res){
        const user = await users.find()
        res.json(user)
    },
    async create(req, res){
        const {user_name, salario, email, senha_usuario} = req.body
        let data = {}
        let user = await users.findOne({user_name} && {email})
        if(!user){
            data = {user_name, salario, tax_number, senha_usuario}
            user = await users.create(data)
            return res.json(200).json(user)
        }else{
            return res.json(500).json(user)
        }
    },
    async user(req, res){
        const{_id} = req.params
        const user = await users.find({_id})
        res.json(user)
    }
}