const mysql = require('mysql');

const host = "us-cdbr-iron-east-05.cleardb.net"
const user = "b950c751139083"
const pswd = "460b17d4"
const dbname = "heroku_9f0c20bb2fdcf0f"

// config db ====================================
const connection = mysql.createConnection({
  host: host,
  user: user,
  password: pswd,
  port: "3306",
  database: dbname
});

connection.connect();

const getStudent = app => {
  app.get('/student/:studentemail', (req, res) => {
    const userQuery = "SELECT user.id FROM heroku_9f0c20bb2fdcf0f.user WHERE user.email =" + connection.escape(req.params.studentemail);
    connection.query(userQuery, function(err, result, fields) {
      if(!err || result.length > 0){
        res.json({result});
      }
    });
  });
}

module.exports = getStudent;
