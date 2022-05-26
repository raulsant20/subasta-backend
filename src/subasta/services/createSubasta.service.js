const Subasta = require('../models/Subasta.model');
const Seller = require('../../seller/models/Seller.model')
const cloudinary = require('../../config/cloudinary')

const createSubasta = async ({ ...userData },id) => {
	const image = userData.foto
	const img = await cloudinary.uploader.upload(image, {upload_preset: 'cgdgrspt'});
	const seller = await Seller.findById(id)
	const data = {...userData, foto: img.url, fotoid: img.public_id, sellerid: id }
	const subasta = await Subasta.create(data)
	const update = seller.subastaid.concat(subasta._id)
	await Seller.findByIdAndUpdate(id, {subastaid: update})
};

module.exports = createSubasta;