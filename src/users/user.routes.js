const { Router } = require('express');
const { postCreateUser, postSignUser } = require('./controllers');
const clientRouter = Router();

clientRouter.post(`/signup`, postCreateUser)
clientRouter.post(`/signin`, postSignUser)

module.exports = clientRouter