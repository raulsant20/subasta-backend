const { createUser } = require('../services');

const postCreateUser = async (req, res) => {
  try {
    const { body } = req;
    await createUser({ ...body });
    return res.status(201).json({ message: 'User created' });
  } catch (error) {
    console.log('postUser.controller: ', error.name);
    return res.status(400).json({ message: error.name });
  }
};

module.exports = postCreateUser;
