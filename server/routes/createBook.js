const express = require("express");
const router = express.Router();
const db = require("../db"); // Import your database connection

router.post("/books", async (req, res) => {
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

    res.json("Book has created successfully");
  } catch (error) {
    res.json({ error: error.message });
  }
});

module.exports = router;
