const asyncHandler = require("express-async-handler");
const Books = require("../dbSchema/bookModel.js")

//@desc POST book
//route /upload-book
//@access public

const uploadBook = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL } = req.body;
  if (!bookTitle || !authorName || !imageURL || !category || !bookDescription || !bookPDFURL) {
    res.status(400);
    throw new Error("All fileds are mondotory")
  }
  const book = await Books.create({
    bookTitle,
    authorName,
    imageURL,
    category,
    bookDescription,
    bookPDFURL
  });
  res.status(201).json(book);
})


module.exports = { uploadBook };
