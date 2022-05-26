const mongoose = require('mongoose');
// const MONGO_URI = 'mongodb://localhost:27017/dbsubasta'
const MONGO_URI = 'mongodb+srv://sportify:sportify@cluster0.s7vxo.mongodb.net/subastadb?retryWrites=true&w=majority'

const connectToDb = async () => {
  try {
    const connection = await mongoose.connect(MONGO_URI);
    console.log(`MongoDb Connected: ${connection.connection.host}`.cyan.underline.bold);
    return connection;
  } catch (error) {
    console.log(`MongoDB connection error: ${error}`.red.bold);
  }
};

module.exports = connectToDb;