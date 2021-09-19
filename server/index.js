var express = require('express');
var mysql=require('mysql');
var app = express();
var connect={
    host:'localhost',
    user:'root',
    password:'',
    database:'test'

}
connection.connect(function(){
    if(!!error){
        console.log("error");
    }
    else{
        console.log("connecter");
    }

});