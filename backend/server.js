const express = require("express");
const app = express();

//custom port 
const PORT = process.env.PORT || 5001;

const cors = require("cors");

//middleware



app.get('/user', (req, res) => {
  res.send("hii there i am shantanu");
})

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
})
