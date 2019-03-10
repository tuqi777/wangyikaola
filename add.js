var express=require('express');
var add=express();
add.use(express.static('AfterSystem'));
var bodyparser=require('body-parser');
add.use(bodyparser.urlencoded());
var multer=require('multer');
var fs=require("fs");

var ull=require("url");
var crypto=require('crypto');
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
var ObjectId = mongodb.ObjectID;
var url = "mongodb://localhost:27017/";

require("./AfterSystem/router/user_reg.js")(add,MongoClient,crypto,url,ull);
require("./AfterSystem/router/admin_login.js")(add,MongoClient,crypto,url);
require("./AfterSystem/router/user_list.js")(add,MongoClient,crypto,url);
require("./AfterSystem/router/user_del.js")(add,MongoClient,crypto,url,ObjectId);
require("./AfterSystem/router/user_info.js")(add,MongoClient,crypto,url,ObjectId);
require("./AfterSystem/router/user_update.js")(add,MongoClient,crypto,url,ObjectId);
require("./AfterSystem/router/good.js")(add,multer,fs);
add.listen(7777);