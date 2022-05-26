const {loginSeller} = require('../services')

const postSignSeller = async (req,res)=>{

	try {
		const {body} = req
		const data = await loginSeller(body)
		return res.status(200).json(data);
	} catch (error) {
    return res.status(400).send( {error: error.message} );
	}
}

module.exports = postSignSeller