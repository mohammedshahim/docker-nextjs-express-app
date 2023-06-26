const express = require("express");
const axios = require("axios");
const app = express();
const cors = require("cors");

// Middleware
app.use(express.json());

// Cors
app.use(cors());

// Routes
app.get("/", async (req, res) => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  res.json({ data });
});

// Start the server
const port = 4000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
