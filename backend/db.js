const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Manager",
  port: 3306,
  database: "tiffin-delivery",
  connectionLimit: 10,
});

module.exports = { pool };
