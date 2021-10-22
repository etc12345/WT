// Creating database
// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: ""
 
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
  
//   con.query("CREATE DATABASE attendance", function (err, result) 
//   {
//     if (err) throw err;
//     console.log("Database created");
//   });
// });



// creating tables
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "attendance"
});
// //table accounts
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
  
//   var sql = "CREATE TABLE accounts (username varchar(20),password varchar(20))";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });

//table attendance
// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
    
//     var sql = "CREATE TABLE studentAttendance (student_id int,student_name varchar(20),student_division varchar(10),semester int,date varchar(15),attendance varchar(20))";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Table created");
//     });
//   });

  //leave letter
//     con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
    
//     var sql = "CREATE TABLE leaveLetter (student_id int,student_name varchar(20),date varchar(15),reason varchar(200),subject varchar(20))";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Table created");
//     });
//   });



// //insertion

// //table accounts

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "INSERT INTO accounts (username, password) VALUES ?";
//     var values = [
//       ['faculty','faculty'],
//       ['Atharv', 'atharv'],
//       ['Adarsh','adarsh'],
//       ['Mrunmay', 'mrunmay'],
//       ['Akash', 'akash'],
//       ['Bharati','bharati'],
//       ['Joshua','joshua'],
//       ['Raj','raj'],
//       ['Alok','alok'],
//       ['Varun','varun'],
//       ['Kiran','kiran'],
//       ['Kartik','kartik']
//     ];
//     con.query(sql, [values], function (err, result) {
//       if (err) throw err;
//       console.log("Number of records inserted: " + result.affectedRows);
//     });
//   });


// //table attendance

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO studentAttendance (student_id,student_name,student_division,semester,date) VALUES ?";
    var values = [
      [1,'Atharv','B',5,'10-09-2021'],  
      [1,'Atharv','B',5,'11-09-2021'], 
      [1,'Atharv','B',5,'12-09-2021'],
      [2,'Adarsh','B',5,'10-09-2021'], 
      [2,'Adarsh','B',5,'11-09-2021'], 
      [2,'Adarsh','B',5,'12-09-2021'], 
      [3,'Joshua','C',5,'10-09-2021'],   
      [3,'Joshua','C',5,'11-09-2021'], 
      [3,'Joshua','C',5,'12-09-2021'], 
      [4,'Akash','D',5,'15-08-2021'], 
      [4,'Akash','D',5,'16-08-2021'], 
      [4,'Akash','D',5,'17-08-2021'], 
      [5,'Bharati','A',5,'21-08-2021'], 
      [5,'Bharati','A',5,'22-08-2021'], 
      [5,'Bharati','A',5,'23-08-2021'], 
      [6,'Mrunmay','A',3,'21-08-2021'], 
      [7,'Raj','A',5,'23-08-2021'], 
      [8,'Alok','B',5,'30-08-2021'],
      [9,'Varun','C',5,'25-08-2021'],  
    ];
    con.query(sql, [values], function (err, result) {
      if (err) throw err;
      console.log("Number of records inserted: " + result.affectedRows);
    });
  });
