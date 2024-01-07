const mongoose = require("mongoose");

const connection_url = process.env.CONNECTION_STRING;


const connectDb = async () => {

  try {
    const connect = await mongoose.connect(connection_url);
    console.log("database is connected")
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

module.exports = connectDb;
