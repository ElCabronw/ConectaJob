const { dbURI, } = require('../config/index');
const mongoose = require("mongoose");
const Candidate = require('../models/Candidate');
const conenctionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
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
  Job: require("../models/Job"),
  Candidate: Candidate,
};