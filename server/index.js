const mysql = require("mysql");
const express = require("express");
const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Richa123",
  database: "books",
  authPlugins: {
    mysql_clear_password: () => () => Buffer.from("your_db_password" + "\0"),
  },
});

app.listen(8000, () => {
  console.log("Connected to the backend");
});

/**
 * this is the middleware get the data from postman
 */
app.use(express.json());

/**
 * this is for check all the details avialable in
 */
app.get("/books", async (req, res) => {
  try {
    const checkBooksDetails = "SELECT * FROM books.books";
    const data = await new Promise((resolve, reject) => {
      db.query(checkBooksDetails, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    res.json(data);
  } catch (error) {
    res.json({ error: error.message });
  }
});

/**
 * This is post request get from user
 */

app.post("/books", async (req, res) => {
  try {
    const insertBooksDetails =
      "INSERT INTO books (`title`, `author`, `content`, `cover`) VALUES(?)";
    const values = [
      req.body.title,
      req.body.author,
      req.body.content,
      req.body.cover,
    ];

    const data = await new Promise((resolve, reject) => {
      db.query(insertBooksDetails, [values], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    res.json("Book has created sussefully");
  } catch (error) {
    res.json({ error: error.message });
  }
});

/**
 * this is delete api
 */

app.delete("/books", async (req, res) => {
  try {
    const bookId = parseInt(req.query.bookId, 10);
    console.log("Parsed Book ID:", bookId);

    if (isNaN(bookId)) {
      throw new Error("Invalid book ID");
    }

    const deleteBooks = "DELETE FROM books WHERE id=?";

    const data = await new Promise((resolve, reject) => {
      db.query(deleteBooks, [bookId], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    res.json("Book has deleted sussefully");
  } catch (error) {
    res.json({ error: error.message });
  }
});

/**
 * this is edit/update  api
 */

app.put("/books", async (req, res) => {
  try {
    const bookId = parseInt(req.query.bookId, 10);
    // console.log("Parsed Book ID:", bookId);

    const updateBooks =
      "UPDATE books SET `title`=?, `author`=?, `content`=?, `cover`=? WHERE id=?";

    const values = [
      req.body.title,
      req.body.author,
      req.body.content,
      req.body.cover,
    ];

    const data = await new Promise((resolve, reject) => {
      db.query(updateBooks, [...values, bookId], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    res.json("Book has been updated successfully");
  } catch (error) {
    res.json({ error: error.message });
  }
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }
  console.log("Connected to the database");
});

module.exports = db;
