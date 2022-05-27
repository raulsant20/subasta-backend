const { Router } = require('express');
const { postCreateSubasta, get, ganadorSubasta, getAll, sellerGet, winGet } = require('./controllers');
const isAuth = require('../middleware/auth')
const subastaRouter = Router();

subastaRouter.post('/crear',isAuth, postCreateSubasta)
subastaRouter.get('/get/:id', get )
subastaRouter.post('/ganar', isAuth, ganadorSubasta)
subastaRouter.get('/getall', getAll)
subastaRouter.get('/sellerget', isAuth, sellerGet)
subastaRouter.get('/winget', isAuth, winGet)

module.exports = subastaRouter