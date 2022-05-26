const { Router } = require('express');
const { postCreateSeller, postSignSeller } = require('./controllers');
const sellerRouter = Router();

sellerRouter.post('/signup', postCreateSeller)
sellerRouter.post('/signin', postSignSeller)

module.exports = sellerRouter