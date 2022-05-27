const Seller = require('../../seller/models/Seller.model')

const sellerGet = async (req, res) => {
  try {
    const { id } = req;
    const seller = await Seller.findById(id).populate('subastaid')
		const subastas = seller.subastaid
    return res.status(201).send(subastas);
  } catch (error) {
    console.log('sellerGet.controller: ', error.name);
    return res.status(400).json({ message: error.name });
  }
}

module.exports = sellerGet