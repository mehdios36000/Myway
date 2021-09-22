var express = require('express');
var mysql=require('mysql');
var app = express();
var cors = require('cors');
var nodemailer = require('nodemailer');
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
    const verification=req.body.verification;
    db.query("SELECT  * FROM `Users` WHERE Email=? ",[email],(err,data)=>{
        if(err){
            console.log({err:err});
        }
        else{
            if(data.length>0){
                res.send({message:"l'utilisateur existe deja"});
            }else{
                db.query("INSERT INTO `Users` (`Name`, `Email`, `password`, `city`, `birthday`, `school`, `Grade`,`verificationCode`) VALUES (?, ?, ?, ?, ?, ?, ?,?)",[name,email,password,city,date,school,grade,verification],(err,data)=>{
                    console.log(err);
                });
                const output=`<h1>Bonjour ${name},</h1>
                <p>Bienvenue sur MyWay.<p>
                <p>Merci pour votre inscription</p>
                <h3>Votre code de verification est: ${verification}</h3>`;
                let transporter = nodemailer.createTransport({
                    host: 'smtp.gmail.com',
                    port: 465,
                    secure: true,
                    auth: {
                        user:"mywayetst@gmail.com",
                        pass:"aqzsedrftg1A-",
                    }
                });
                let mailOptions = {
                    from: '"MyWay" <mywayetst@gmail.com>',
                    to: email,
                    subject: 'Bienvenue sur MyWay',
                    text: 'Hello world?',
                    html: output
                };
                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        return console.log(error);
                    }
                    console.log('Message sent: %s', info.messageId);
                }
                );
                        
                
            }
        }
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
               if(data[0].isconfirmed==0){
                    res.send({message:"code de verification needed",Id:data[0].Id,Email:data[0].Email});
                }else{
               res.send(data);

            }
           }else{
               res.send({message:'email ou mot de passe incorrect'});
           }
       }
    });



});

app.post("/confirm",(req,res)=>{
    const confirmation=req.body.confirm;
    const email=req.body.Email;
    db.query("SELECT  * FROM `Users` WHERE Email=? AND verificationCode=?",[email,confirmation],(err,data)=>{
       if(err){
           console.log({err:err});
       }
       else{
           if(data.length>0){
               res.send({message:"code de verification correct"});
               db.query("UPDATE `Users` SET `isconfirmed` = ? WHERE `Users`.`Email` = ?",[1,email],(err,data)=>{
                console.log(err);
            });

           }else{
               res.send({message:'code de verification incorrect'});
           }
       }
    });





});
app.post("/counselor",(req,res)=>{

    db.query("SELECT  * FROM `guidanceCounselor`",[],(err,data)=>{
       if(err){
           console.log({err:err});
       }
       else{
           if(data.length>0){
               res.send(data);
           }else{
               res.send({message:'aucun oriantateur trouver'});
           }
       }
    });
});
app.post("/times",(req,res)=>{
    const name=req.body.name;

    db.query("SELECT  * FROM `times` WHERE name= ? AND isTaken=? ",[name,0],(err,data)=>{
       if(err){
           console.log({err:err});
       }
       else{
           if(data.length>0){
               res.send(data);
           }else{
               res.send({message:'aucun oriantateur trouver'});
           }
       }
    });
});
app.post("/schedule",(req,res)=>{
    const name=req.body.name;
    const time=req.body.date;
    const id=req.body.id;

    db.query("UPDATE `times` SET `isTaken` = '1' WHERE `times`.`name` = ? AND `times`.`time` = ? ",[name,time],(err,data)=>{
       if(err){
           console.log({err:err});
       }
       else{
           db.query("SELECT  * FROM `Users` WHERE Id=?",[id],(err,data)=>{
                if(err){
                        console.log({err:err});
                }
                else{
                    if(data.length>0){
                        const output=`<h1>Bonjour ${data[0].Name},</h1>
                <p>Votre rendez vous aura lieu aujourd'hui  a ${time} 
                <br/>  avec ${name}
                 </p>
                `;
                let transporter = nodemailer.createTransport({
                    host: 'smtp.gmail.com',
                    port: 465,
                    secure: true,
                    auth: {
                        user:"mywayetst@gmail.com",
                        pass:"aqzsedrftg1A-",
                    }
                });
                let mailOptions = {
                    from: '"MyWay" <mywayetst@gmail.com>',
                    to: data[0].Email,
                    subject: 'Rendez-vous orientation',
                    text: 'Hello world?',
                    html: output
                };
                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        return console.log(error);
                    }
                    console.log('Message sent: %s', info.messageId);
                });
                

                


                    }
                }
           });
        
           res.send({message:'success'});

           
       }
       
    });
});



app.listen(1337,()=>{
    console.log("server is running");
});
