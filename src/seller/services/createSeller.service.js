const bcrypt = require('bcrypt');
const Seller = require('../models/Seller.model');

const createSeller = async ({ ...userData }) => {
  const hash = await hashPassword(userData.password);
  const user = { ...userData, password: hash };
  await Seller.create(user);
};

async function hashPassword(password) {
  return bcrypt.hash(password, 10);
}

module.exports = createSeller;