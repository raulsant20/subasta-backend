const { createSubasta } = require('../services');

const postCreateSubasta = async (req, res) => {
  try {
    const { body } = req;
    await createSubasta({ ...body },req.id);
    return res.status(201).json({ message: 'Subasta created' });
  } catch (error) {
    console.log('postCreateSubasta.controller: ', error.name);
    return res.status(400).json({ message: error.name });
  }
};

module.exports = postCreateSubasta;