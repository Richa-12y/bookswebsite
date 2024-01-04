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

module.exports = router;
