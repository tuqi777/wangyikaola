//module.exports=function(app,MongonClient,crypto,url){
module.exports=function(add,MongoClient,crypto,url){
    
add.get("/uu_reg",function(req,res){

        MongoClient.connect(url, (err, database)=>{
            // 操作数据库的代码，必须写在里面

            var db=database.db("bk1819");

                var where={
                    "username":req.query.user
                }
                //db.collection("表名").find(where).toArray( (err, result)=>{} );
                db.collection("after").find(where).count((err,result)=>{
                    
                    //var pwd=crypto.createHmac('sha256','abc').update(req.body.password).digest('hex');
                    var pwd=crypto.createHmac('sha256','abc').update(req.query.pass).digest('hex');
                    
                    if(result==0) {

                        var myobj={
                            "username":req.query.user,
                            "password":pwd,
                            "ip":req.ip,
                            "time":new Date()
                        }

                        db.collection("after").insertOne(myobj,(err,result)=>{
    
                            res.send({"state":1,"msg":"注册成功"});
                        })
                    } else {
                            res.send({"state":0,"msg":"注册失败，用户名被占用！"})
                    }
                })
            
        });
    })
}