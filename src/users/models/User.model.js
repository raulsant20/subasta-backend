const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({
  fullName: {
    type: String,
  },
  subastas:[{
    type: Schema.Types.ObjectId,
		ref: 'Subasta' 
  }],
  dni:{
    type: String,
  },
  mail:{
    type: String,
  },
  user:{
    type: String,
  },
  password:{
    type: String,
  },
  departamento:{
    type: String,
  },
  provincia:{
    type: String,
  },
  distrito:{
    type: String,
  },
  direccion:{
    type: String,
  },
  domicilio:{
    type: String,
  },
  complement:{
    type: String,
  }
});

module.exports = model('User', userSchema);