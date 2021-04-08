const users = require('../models/user.models')
const routes = require('../routes')
const jwt = require('jsonwebtoken')
const secret = 'mysecret'
module.exports = {
    async index(req, res) {
        const user = await users.find()
        res.json(user)
    },
    async create(req,res){
        const {user_name, email, salario, senha_usuario} = req.body;
        let data = {};
        let user =  await users.findOne({email} && {user_name});
        
        if(!user){
            data = {user_name, email, salario,  senha_usuario};

            user = await users.create(data);
            return res.status(200).json(user);
        }else{
            return res.status(500).json(user);
        }
    },
    async user(req, res) {
        const { _id } = req.params
        const user = await users.find({ _id })
        res.json(user)
    },
    async delete(req, res) {
        const { _id } = req.params;
        const user = await users.findByIdAndDelete({_id});
        return res.json(user);
    },
    async update(req, res) {
        const { _id, user_name, salario, email, senha_usuario } = req.body
        let data = { user_name, salario, email, senha_usuario }

        const user = await users.findByIdAndUpdate({ _id }, data, { new: true })

        res.json(user)

    },
    async login(req,res){
        const { email, senha } = req.body;
        users.findOne({email} , function(err,user){
            if(err){
                console.log(err);
                res.status(200).json({erro: "Erro no servidor. Por favor, tente novamente"});
            }else{
                        const payload = { email };
                        const token = jwt.sign(payload, secret, {
                            expiresIn: '24h'
                        })
                        res.cookie('token', token, {httpOnly: true});
                        res.status(200).json({status:1, auth:true, token:token,id_client: user._id, user_name:user.user_name, salario:user.salario});
                    }
                })
               
            }
}