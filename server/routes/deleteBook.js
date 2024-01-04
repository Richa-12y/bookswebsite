const express = require("express");
const router = express.Router();
const db = require("../db"); // Import your database connection

router.delete("/books", async (req, res) => {
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

    res.json("Book has deleted successfully");
  } catch (error) {
    res.json({ error: error.message });
  }
});

module.exports = router;
