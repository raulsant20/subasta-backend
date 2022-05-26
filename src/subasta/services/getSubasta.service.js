const Subasta = require('../models/Subasta.model');

const getSubasta = async(id) =>{
	const subasta = await Subasta.findById(id)
	return subasta
}

module.exports = getSubasta