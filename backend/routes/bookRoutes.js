const express = require("express");
const { uploadBook, getAllBooks, updateBook, deleteBook } = require("../controller/bookController");
const router = express.Router();


//router.route("/all-books");
router.route("/").get(getAllBooks).post(uploadBook);

//router.route("/delete-book/:id");
router.route("/:id").put(updateBook).delete(deleteBook);


module.exports = router;
