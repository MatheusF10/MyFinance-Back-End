const express = require('express')

const routes = express.Router()

const users = require('../src/controllers/User.Controller')
const spends = require('../src/controllers/Spend.Controllers')

routes.get('/', users.index)
//Users Routes
routes.post('/api/usuarios', users.create)
routes.get('/api/usuarios', users.index)
routes.delete('/api/usuarios/:_id', users.delete)
routes.put('/api/usuarios', users.update)
routes.get('/api/usuarios.details/:_id', users.user)
routes.post('/api/usuarios/login', users.login)
// Spends Routes 
routes.get('/api/gastos', spends.index)
routes.post('/api/gastos', spends.create)
routes.get('/api/gastos/:id_user', spends.details)
routes.delete('/api/gastos/:_id', spends.delete)
module.exports = routes