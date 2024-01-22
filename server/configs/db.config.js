module.exports = {
  host: "localhost",
  user: "root",
  password: "Richa123",
  database: "books",
  authPlugins: {
    mysql_clear_password: () => () => Buffer.from("your_db_password" + "\0"),
  },
};
