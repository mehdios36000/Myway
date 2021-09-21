var express = require('express');
var mysql=require('mysql');
var app = express();
var cors = require('cors');
app.use(express.json());
app.use(cors());






const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'myway',
    port:8889
});
app.post("/register",(req,res)=>{
   
    const email=req.body.email;
    const password=req.body.password;

    const name=req.body.name;
    const city=req.body.city;
    const date=req.body.date;
    const school=req.body.school;
    const grade=req.body.grade;

    db.query("INSERT INTO `Users` (`Name`, `Email`, `password`, `city`, `birthday`, `school`, `Grade`) VALUES (?, ?, ?, ?, ?, ?, ?)",[name,email,password,city,date,school,grade],(err,data)=>{
        console.log(err);
    });
});
app.post("/login",(req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    db.query("SELECT  * FROM `Users` WHERE Email=? AND password=? ",[email,password],(err,data)=>{
       if(err){
           console.log({err:err});
       }
       else{
           if(data.length>0){
               res.send(data);
           }else{
               res.send({message:'email ou mot de passe incorrect'});
           }
       }
    });



});


app.listen(1337,()=>{
    console.log("server is running");
});
