var express=require('express');
var app=express();
app.use(express.static('static'));
var bodyparser=require('body-parser');
app.use(bodyparser.urlencoded());

var crypto=require('crypto');
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
var ObjectId = mongodb.ObjectID;
var url = "mongodb://localhost:27017/";

require("./static/Register/router/user_reg.js")(app,MongoClient,crypto,url);
require("./static/Register/router/admin_login.js")(app,MongoClient,crypto,url);

app.listen(7000);