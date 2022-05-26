const { createSeller } = require('../services');

const postCreateSeller = async (req, res) => {
  try {
    const { body } = req;
    await createSeller({ ...body });
    return res.status(201).json({ message: 'User created' });
  } catch (error) {
    console.log('postCreateSeller.controller: ', error.name);
    return res.status(400).json({ message: error.name });
  }
};

module.exports = postCreateSeller;
