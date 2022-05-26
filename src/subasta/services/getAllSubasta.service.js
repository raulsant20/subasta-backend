const Subasta = require('../models/Subasta.model');

const getAllSubasta = async() =>{
	const subastas = await Subasta.find()
	return subastas
}

module.exports = getAllSubasta