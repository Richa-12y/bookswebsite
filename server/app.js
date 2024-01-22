const express = require("express");
const app = express();
const getAllBooksRouter = require("./routes/getAllBooks");
const createBookRouter = require("./routes/createBook");
const deleteBookRouter = require("./routes/deleteBook");
const updateBookRouter = require("./routes/updateBook");
const serverConfig = require("./configs/server.config");

// Middleware to parse JSON requests
app.use(express.json());

// Use the route handlers
app.use(getAllBooksRouter);
app.use(createBookRouter);
app.use(deleteBookRouter);
app.use(updateBookRouter);
// app.use(editapi);

// Add other configurations and middleware as needed

app.listen(serverConfig.PORT, () => {
  console.log(`Server started on the port no :${serverConfig.PORT}`);
});
