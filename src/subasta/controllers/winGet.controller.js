const User = require('../../users/models/User.model')

const winGet = async (req, res) => {
  try {
    const { id } = req;
    const user = await User.findById(id).populate('subastas')
		const subastas = user.subastas
    return res.status(201).send(subastas);
  } catch (error) {
    console.log('winGet.controller: ', error.name);
    return res.status(400).json({ message: error.name });
  }
}

module.exports = winGet