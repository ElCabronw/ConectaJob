const { dbURI, } = require('../config/index');
const mongoose = require("mongoose");
const conenctionOptions = {
  //useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //useFindAndModify: false,
};
try {
  mongoose
    .connect(
      dbURI,
      conenctionOptions
    )
    .then((res) => console.log(`MongoDB connected Successfully..!`));
} catch (error) {
  console.log(`MongoDB Error: `, error.message);
  process.exit(1);
}

mongoose.Promise = global.Promise;

module.exports = {
  User: require("../models/User"),
};