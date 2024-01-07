const express = require("express");
const dotenv = require("dotenv").config();
const app = express();

//custom port 
const PORT = process.env.PORT || 5001;
const cors = require("cors");
const connectDb = require("./config/connectionDb.js");

//database connecttion 
connectDb();
//middleware

app.use(cors());
app.use(express.json());

app.use("/api/book", require("./routes/bookRoutes.js"))

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
})
