const express = require('express');
const fs = require('fs');
const sessions = require('client-sessions');
const mysql = require('mysql');
const app = express();

const port = 3001;

app.use((req, res, next) =>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const host = "localhost"
const user = "root"
const pswd = "13fuzzybunnys"
const dbname = "saja_academy"

// config db ====================================
const connection = mysql.createConnection({
  host: host,
  user: user,
  password: pswd,
  port: "3306",
  database: dbname
});

connection.connect();

app.get('/student', (req, res) => {


  const queryString = "SELECT * FROM saja_academy.user";

  connection.query(queryString, function(err, rows, fields) {
    if(err) throw err;

    for (var i in rows) {
      console.log("name " + rows[i].name);

    }
    res.json({rows});
  });

});


app.get('/student/:studentemail', (req, res) => {
  const userQuery = "SELECT user.id FROM saja_academy.user WHERE user.email =" + connection.escape(req.params.studentemail);
  connection.query(userQuery, function(err, result, fields) {
    if(!err || result.length > 0){
      res.json({result});
    }
  });
});

app.listen(port, () => {
  console.log(`Find the server at: http://localhost:${port}/`); // eslint-disable-line no-console
});
