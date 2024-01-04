const express = require("express");
const app = express();
const getAllBooksRouter = require("./routes/getAllBooks");
const createBookRouter = require("./routes/createBook");
const deleteBookRouter = require("./routes/deleteBook");
const updateBookRouter = require("./routes/updateBook");
const db = require("./db");

// Middleware to parse JSON requests
app.use(express.json());

// Use the route handlers
app.use(getAllBooksRouter);
app.use(createBookRouter);
app.use(deleteBookRouter);
app.use(updateBookRouter);

// Add other configurations and middleware as needed

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
