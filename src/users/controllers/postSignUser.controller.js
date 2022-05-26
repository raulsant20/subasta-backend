const {loginUser} = require('../services')

const postSignUser = async (req,res)=>{
	try {
		const {body} = req
		const data = await loginUser(body)
		return res.status(200).json(data);
	} catch (error) {
    return res.status(400).send( {error: error.message} );
	}
}

module.exports = postSignUser