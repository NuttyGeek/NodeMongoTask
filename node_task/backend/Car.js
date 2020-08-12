const mongoose = require('mongoose');

const car = new mongoose.Schema({
  name: { type: String }, 
  image: { type: String },
  mileage: { type: String },
  hp: { type: String },
  quarter: { type: String }
});

module.exports = Car = mongoose.model('car',car);