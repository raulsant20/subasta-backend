const {getSubasta} = require('../services')

const get = async (req, res) => {
  try {
		const {id} = req.params
		const subasta = await getSubasta(id)
    return res.status(201).json(subasta);
  } catch (error) {
    console.log('getSubasta.controller: ', error.name);
    return res.status(400).json({ message: error.name });
  }
};

module.exports = get;