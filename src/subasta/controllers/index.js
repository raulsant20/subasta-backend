const postCreateSubasta = require('./postCreateSubasta.controller');
const get = require('./getSubasta.controller')
const ganadorSubasta = require('./ganadorSubasta.controller')
const getAll = require('./getAll.controller')

module.exports = {
  postCreateSubasta,
	get,
	ganadorSubasta,
	getAll
};