const mysql = require("mysql");
const dbConfig = require("./configs/db.config");

const db = mysql.createConnection(dbConfig);

db.connect((err) => {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }
  console.log("Connected to the database");
});

module.exports = db;
