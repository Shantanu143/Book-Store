const express = require("express");
const { uploadBook, getAllBooks, updateBook } = require("../controller/bookController");
const router = express.Router();


router.route("/upload-book").post(uploadBook);
router.route("/all-books").get(getAllBooks);
router.route("/update-book/:id").put(updateBook);

module.exports = router;
