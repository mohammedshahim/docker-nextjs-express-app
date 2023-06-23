const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

// Start the server
const port = 4000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
