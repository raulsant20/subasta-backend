const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({
	sellerid: {
		type: Schema.Types.ObjectId,
		ref: 'Seller'
	},
  ganadorid:{
    type: Schema.Types.ObjectId,
		ref: 'User' 
  },
  categoria: {
    type: String,
  },
  subcategoria:{
    type: String,
  },
	nombre:{
    type: String,
  },
  descripcion:{
    type: String,
  },
  fecha:{
    type: String,
  },
  modalidad:{
    type: String,
  },
  inicial:{
    type: String,
  },
  foto:{
    type: String,
  },
	comprador:{
		type: String
	},
	fotoid:{
		type: String
	},
	inic:{
		type: Boolean,
		default: false
	}
});

module.exports = model('Subasta', userSchema);
