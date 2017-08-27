const express = require('express');
const fs = require('fs');
const mysql = require('mysql');
const app = express();

const port = 3001;

app.use((req, res, next) =>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Express only serves static assets in production
console.log("NODE_ENV: ", process.env.NODE_ENV);
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  // Return the main index.html, so react-router render the route in the client
  app.get('/', (req, res) => {
    res.sendFile(path.resolve('client/build', 'index.html'));
  });
}

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

// const COLUMNS = [
//   'last_name',
//   'first_name'
// ];


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
  console.log(JSON.stringify(connection.escape(req.params.studentemail)));
  console.log("hello");
  //const queryString = "SELECT * FROM saja_academy.user WHERE email="+ connection.escape(req.params.studentemail);

  const queryString = "SELECT * FROM user LEFT JOIN student ON user.id = student.user_id AND user.email ="+connection.escape(req.params.studentemail);
  // gets all users, but we need students
  // LEFT JOIN table2 ON table1.column_name = table2.column_name;
  //
  connection.query(queryString, function(err, rows, fields) {
    if(err) throw err;

    for (var i in rows) {
      console.log("name " + rows[i].name);

    }
    res.json({rows});
  });
});

app.listen(port, () => {
  console.log(`Find the server at: http://localhost:${port}/`); // eslint-disable-line no-console
});
