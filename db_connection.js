var mysql = require('mysql');

var con = mysql.createConnection({
  host: "127.0.0.1:3306",
  user: "root",
  password: "be@tsbe@ts"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});