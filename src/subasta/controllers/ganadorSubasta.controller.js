const { updateSubasta } = require('../services');

const ganadorSubasta = async () =>{
	try {
    const { body } = req;
    await updateSubasta({ ...body },req.id);
    return res.status(201).json({ message: 'Subasta update' });
  } catch (error) {
    console.log('ganadorSubasta.controller: ', error.name);
    return res.status(400).json({ message: error.name });
  }
}

module.exports = ganadorSubasta