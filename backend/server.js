const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const path = require("path");
// custom port
const PORT = process.env.PORT || 5001;
const cors = require("cors");
const connectDb = require("./config/connectionDb.js");

// database connection
connectDb();

// middleware
app.use(cors());
app.use(express.json());

// Serve static files for the frontend
app.use(express.static(path.join(__dirname, "../frontend/dist")));

// API routes
app.use("/api/book", require("./routes/bookRoutes.js"));

// Catch-all route for serving the React app
app.get("*", (req, res) => {
  const indexPath = path.join(__dirname, "../frontend/dist/index.html");
  res.sendFile(indexPath);
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
