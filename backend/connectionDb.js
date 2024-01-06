const express = require("express");
const mongoose = require("mongoose");

const connection_url = "mongodb+srv://user:user123@cluster0.ubb60cs.mongodb.net/?retryWrites=true&w=majority"


mongoose.connect(connection_url).then(() => {
  console.log("database connection successful");
}).catch((err) => {
  console.log('database connection error', err);
})
