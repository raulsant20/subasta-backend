const bcrypt = require('bcrypt');
const User = require('../models/User.model');

const createUser = async ({ ...userData }) => {
  const hash = await hashPassword(userData.password);
  const user = { ...userData, password: hash };
  await User.create(user);
};

async function hashPassword(password) {
  return bcrypt.hash(password, 10);
}

module.exports = createUser;