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

const host = "us-cdbr-iron-east-05.cleardb.net"
const user = "bed60c6ac47294"
const pswd = "b11032f8"
const dbname = "heroku_dd8592f0f69936c"

// config db ====================================
const connection = mysql.createConnection({
  host: host,
  user: user,
  password: pswd,
  port: "3306",
  database: dbname
});

connection.connect();

app.get('/student/', (req, res) => {
  const userQuery = "SELECT * FROM heroku_dd8592f0f69936c.user";
  // const userQuery = "SELECT user.id FROM saja_academy.user WHERE user.email =" + connection.escape(req.params.studentemail);
  connection.query(userQuery, function(err, result, fields) {
    if(!err || result.length > 0){
      res.json({result});
    }
  });
});

app.listen('https://pure-retreat-21164.herokuapp.com', () => {
  console.log(`Find the server at: http://localhost:${port}/`); // eslint-disable-line no-console
});
