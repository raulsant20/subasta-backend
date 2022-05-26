const {getAllSubasta} = require('../services')

const getAll = async (req, res) => {
  try {
		const subastas = await getAllSubasta()
    return res.status(201).json(subastas);
  } catch (error) {
    console.log('getAllSubasta.controller: ', error.name);
    return res.status(400).json({ message: error.name });
  }
};

module.exports = getAll;