const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
  rua: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  uf: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    require: true,
  },
});

const addresses = mongoose.model('addresses', AddressSchema);

module.exports = addresses;
