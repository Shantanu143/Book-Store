const mongoose = require("mongoose");

const booksSchema = mongoose.Schema({

  bookTitle: {
    type: String,
    require: [true, "Please enter book title"]
  },


  authorName: {
    type: String,
    require: [true, "Please enter author name"]
  },

  imageURL: {
    type: String,
    require: [true, "Please enter img url"]
  },

  category: {
    type: String,
    require: [true, "Please enter book category"]
  },


  bookDescription: {
    type: String,
    require: [true, "Please enter book description "]
  },


  bookPDFURL: {
    type: String,
    require: [true, "Please enter book PDF URL"]
  },



})
module.exports = mongoose.model("Books", booksSchema);
