const bcrypt = require('bcrypt');
const Seller = require('../models/Seller.model');
const jwt = require('jsonwebtoken')

const verifiedPass = async (passwordSent, passwordStored) => {
	const isValid = await bcrypt.compare(passwordSent, passwordStored)
	return isValid
}

const loginSeller = async ({ ...userData }) => {
	const document = await Seller.findOne({mail: userData.mail})
	const isVerified = await verifiedPass(userData.password, document.password)
	if(isVerified){
			const token = jwt.sign({ id: document._id }, "apple")
			const data = {token, name: document.fullName, type: 'seller', id: document._id}
			return data
	}else{
		throw new Error('data incorrect');
	}
};

module.exports = loginSeller;