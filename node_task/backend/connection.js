const mongoose = require('mongoose');

const URI = 'mongodb+srv://admin:admin@007@cluster0.jf7ns.mongodb.net/cars?retryWrites=true&w=majority';

const connectDB = async () => {
  await mongoose.connect(URI, { useUnifiedTopology: true, useNewUrlParser: true});
  console.log('DB Connected !');
}

module.exports = connectDB;