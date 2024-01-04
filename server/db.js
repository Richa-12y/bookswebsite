const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Richa123",
  database: "books",
  authPlugins: {
    mysql_clear_password: () => () => Buffer.from("your_db_password" + "\0"),
  },
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }
  console.log("Connected to the database");
});

module.exports = db;
