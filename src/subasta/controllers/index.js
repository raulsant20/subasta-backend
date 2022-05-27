const postCreateSubasta = require('./postCreateSubasta.controller');
const get = require('./getSubasta.controller')
const ganadorSubasta = require('./ganadorSubasta.controller')
const getAll = require('./getAll.controller')
const sellerGet = require('./sellerGet.controller')
const winGet = require('./winGet.controller')

module.exports = {
  postCreateSubasta,
	get,
	ganadorSubasta,
	getAll,
	sellerGet,
	winGet,
};