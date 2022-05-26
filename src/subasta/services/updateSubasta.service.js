const Subasta = require('../models/Subasta.model');
const User = require('../../users/models/User.model')

const updateSubasta = async({ ...body },id) => {
	const {inicial, idsubasta} = body
	await Subasta.findByIdAndUpdate(idsubasta, {inicial: inicial, ganadorid: id})
	const user = await User.findById(id)
	const idarray = user.subastas.concat(idsubasta)
	await User.findByIdAndUpdate(id, {subastas: idarray})
}

module.exports = updateSubasta