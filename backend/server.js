const express = require("express");
const app = express();
const mongoose = require("mongoose");
//custom port 
const PORT = process.env.PORT || 5001;
const connection_url = "mongodb+srv://user:user123@cluster0.ubb60cs.mongodb.net/?retryWrites=true&w=majority"
const cors = require("cors");

//middleware

app.use(cors());
app.use(express.json());

app.get('/user', (req, res) => {
  res.send("hii there i am shantanu");
})



mongoose.connect(connection_url).then(() => {
  console.log("database connection successful");
}).catch((err) => {
  console.log('database connection error', err);
})
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
})
