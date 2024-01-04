const express = require("express");
const router = express.Router();
const db = require("../db"); // Import your database connection

router.put("/books", async (req, res) => {
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

module.exports = router;
