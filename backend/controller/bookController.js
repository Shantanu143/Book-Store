const asyncHandler = require("express-async-handler");
const Books = require("../model/bookModel.js")

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


//@dece GET single Books
//@route /api/book/:id
//@access public

const getSingleBooks = asyncHandler(async (req, res) => {

  const book = await Books.findById(req.params.id);
  if (!book) {
    res.status(404);
    throw new Error("Book not found");
  }
  res.status(200).json(book);

})


//@dece GET all Books
//@route /all-book
//@access public

const getAllBooks = asyncHandler(async (req, res) => {
  console.log(req.body);
  let query = {};
  if (req.query?.category) {
    query = { category: req.query.category }
  }


  const book = await Books.find(query);

  if (!book) {
    res.status(404);
    throw new Error("Book can't find");
  }
  res.status(200).json(book);
  res.send(book);

})


// @dece updateBook
//@route /update-book/:id
//@access public 

const updateBook = asyncHandler(async (req, res) => {
  console.log(req.body);

  const book = await Books.findById(req.params.id);


  if (!book) {
    res.status(404);
    throw new Error("Book not found");
  }
  const updatedBook = await Books.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  )

  res.status(200).json(updatedBook);
  res.send(updatedBook);

})
//@dece deleteBook
//@route /delete-book/:id
//@access public 

const deleteBook = asyncHandler(async (req, res) => {
  console.log(req.body);

  const book = await Books.findById(req.params.id);

  if (!book) {
    res.status(404);
    throw new Error("Book not found");
  }

  await book.deleteOne();
  res.status(200).json(book);


})



module.exports = { uploadBook, getSingleBooks, getAllBooks, updateBook, deleteBook };
