const mongoose = require("mongoose");

const booksSchema = mongoose.Schema({

  bookTitle: {
    type: String,
    require: [true, "Please enter book title"]
  },


  authorName: {
    type: String,
    require: [true, "Please enter book title"]
  },

  imageURL: {
    type: String,
    require: [true, "Please enter book title"]
  },


  bookDescription: {
    type: String,
    require: [true, "Please enter book title"]
  },


  bookPDFURL: {
    type: String,
    require: [true, "Please enter book title"]
  },



})
module.exports = mongoose.model("Books", booksSchema);
