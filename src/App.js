require('colors');
const express = require('express');
const cors = require('cors')
const clientRouter = require('./users/user.routes')
const sellerRouter = require('./seller/seller.routes')
const subastaRouter = require('./subasta/subata.routes')
const app = express();
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors())

app.use('/api/user', clientRouter)
app.use('/api/seller', sellerRouter)
app.use('/api/subasta', subastaRouter)

module.exports = app;