const express = require("express");
const { uploadBook } = require("../controller/bookController");
const router = express.Router();

router.route("/").post(uploadBook);


module.exports = router;
