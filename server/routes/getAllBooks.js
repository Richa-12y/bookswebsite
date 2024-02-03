const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/books", async (req, res) => {
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
router.get("/books/:id", async (req, res) => {
  try {
    const bookId = req.params.id;
    const getBookDetailsById = "SELECT * FROM books.books WHERE id = ?";

    const data = await new Promise((resolve, reject) => {
      db.query(getBookDetailsById, [bookId], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    if (data.length === 0) {
      res.status(404).json({ message: "Book not found" });
    } else {
      res.json(data[0]);
    }
  } catch (error) {
    res.json({ error: error.message });
  }
});
module.exports = router;
//this is for get all the data from book api
//this is new create book
//this is deleted api
