const bcrypt = require('bcrypt');
const User = require('../models/User.model');
const jwt = require('jsonwebtoken')

const verifiedPass = async (passwordSent, passwordStored) => {
	const isValid = await bcrypt.compare(passwordSent, passwordStored)
	return isValid
}

const loginUser = async ({ ...userData }) => {
	const document = await User.findOne({mail: userData.mail})
	const isVerified = await verifiedPass(userData.password, document.password)
	if(isVerified){
			const token = jwt.sign({ id: document._id }, "apple")
			const data = {token, name: document.fullName, type: 'user', id: document._id}
			return data
	}else{
		throw new Error('data incorrect');
	}
};

module.exports = loginUser;