var mysql = require('mysql');
var express = require('express');
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var url=require('url');
const { response } = require('express');
const { request } = require('http');
var urlencodedParser=bodyParser.urlencoded({extended:true});

var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'attendance'
})



app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
   
   
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
   
app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname + '/login.html'));
});


app.post('/validate', function(request, response) {
    var username = request.body.username;
    var password = request.body.password;
        if (username && password) {
     con.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
      if (results.length > 0) {
       request.session.loggedin = true;
       request.session.username = username;
       response.redirect('/home');
      } else {
       response.send('Incorrect Username and/or Password!');
      }   
      response.end();
     });
    }
    else {
     response.send('Please enter Username and Password!');
     response.end();
    }
});
   
   
app.get('/home', function(request, response) {
    if (request.session.loggedin) {
           if(request.session.username=="faculty")
           {
               response.redirect("/faculty");
           }
           else{
               response.redirect("/student");
            }
    } else {
     response.send('Please login to view this page!');
    }
    response.end();
});

app.get('/faculty',function(req,res){

    con.query("select * from `studentattendance`",function(err,result,fields){
        console.log(result);
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write('<style>body{background-color: bisque;}</style>')
        res.write('<style>body{align:center; padding-top: 3%}</style>')
        res.write('<style>table{tabwidth=1000px;}</style>')
        res.write('<style>table{font-family:cursive;border-collapse:collapse;}</style>')
        res.write('<style>.my-h1{font-size:41px;margin-bottom:35px;text-align:center;}</style>')
        res.write('<style>th{font-size:24px;}</style>')
        res.write("<body>")
        res.write("<h1 class='my-h1'>Students</h1>")
        res.write("<table border='5px solid black' width='100%';border-color: rgb(32, 7, 71);>");
        res.write("<tr>");
        for(var x in result[0])
        {
            res.write("<th><label>"+ x +"</label></th>");
        }
        res.write("</tr>");
        for(var row in result)
        {
            res.write("<tr>");
            for(var col in result[row])
            {
                res.write("<td>"+ result[row][col] +"</td>");
                
            }
            res.write("<td><a href='http://localhost:3000/mark?name="+result[row]['student_name']+"&date="+result[row]['date']+"'>Mark Attendance</a></td>")
            res.write("</tr>")
        }
        res.write("</table>");
        res.end();

    })
});

app.get('/mark',function(req,res)
{
    var q=url.parse(req.url,true).query;
    req.session.date=q.date;
    req.session.user=q.name;
    console.log(req.session.user);
    res.sendFile(path.join(__dirname + '/markAttendance.html'));
});

app.post('/giveAttendance',function(req, res)
{
    var name=req.session.user;
    var date=req.session.date;
    var attendance=req.body.attendance;
    con.query('update studentattendance set attendance = ? where student_name=? and date=?',[attendance,name,date], function (err, result) {
        if (err) throw err;
        console.log('Marked!');
        res.redirect('/faculty');
        res.end();
        // res.end("Marked Successfully!");
    });
});

app.get('/student',function(req,res){
    res.sendFile(path.join(__dirname + '/studentHome.html'));
})

app.get('/view',function(req,res){
    var studentname=req.session.username;
    console.log(studentname);
    con.query("select * from `studentattendance` where student_name=?",[studentname],function(err,result,fields){
        console.log(result);
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write('<style>body{background-color: bisque;}</style>')
        res.write('<style>body{align:center; padding-top: 3%}</style>')
        res.write('<style>table{tabwidth=1000px;}</style>')
        res.write('<style>table{font-family:cursive;border-collapse:collapse;}</style>')
        res.write('<style>.my-h1{font-size:41px;margin-bottom:35px;text-align:center;}</style>')
        res.write('<style>th{font-size:24px;}</style>')
        res.write("<body>")
        res.write("<h1 class='my-h1'>Student</h1>")
        res.write("<table border='5px solid black' width='100%';border-color: rgb(32, 7, 71);>");
        res.write("<tr>");
        for(var x in result[0])
        {
            res.write("<th><label>"+ x +"</label></th>");

        }
        res.write("</tr>");
        for(var row in result)
        {
            res.write("<tr>");
            for(var col in result[row])
            {
                res.write("<td>"+ result[row][col] +"</td>");
                
            }
            //res.write("<td><a href='http://localhost:3000/leave?name="+result[row]['student_name']+"&date="+result[row]['date']+"'>Leave Letter</a></td>")
            res.write("</tr>")
        }
        res.write("</table>");
        res.end();
    });
});

app.get('/leave',function(req,res){
    res.sendFile(path.join(__dirname + '/studentLeave.html'));
});

app.post('/acceptLeave',function(req,res){
    var name=req.session.username;
    console.log(name);
    var date=req.body.date;
    var reason = req.body.reason;
    var subject = req.body.subject;
    values = [
        [name,date,reason,subject]
    ];
    con.query('INSERT INTO leaveletter (student_name,date,reason,subject) VALUES ?',[values], function (err, result) {
        if (err) throw err;
        console.log('OK!');
        console.log("Number of records inserted: " + result.affectedRows);
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write("<body style='background-color:bisque;'>")
        res.write("<h1 style='text-align:center;'>Leave Letter Received!</h1>");
        res.write("</body>")
        res.end();
    });
})

app.listen(3000);