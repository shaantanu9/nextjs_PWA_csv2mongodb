const mongoose = require("mongoose");
require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;

// create connect function to connect to database
const connect = () => mongoose.connect(MONGO_URI);

//exporting the connect function in index.js
module.exports = connect;

// This is 