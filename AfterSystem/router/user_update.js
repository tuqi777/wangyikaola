//module.exports=function(app,MongonClient,crypto,url){
    module.exports=function(add,MongoClient,crypto,url,ObjectId){
    
        add.get("/user_update",function(req,res){
            
            var username=req.query.username;
            var id=req.query.id;
            var password=req.query.password;
                MongoClient.connect(url, (err, database)=>{
                    // 操作数据库的代码，必须写在里面
                    console.log(1)
                    var db=database.db("bk1819");
                    var pwd=crypto.createHmac('sha256','abc').update(password).digest('hex');
                    var where={_id:ObjectId(id)};
                    
                    var update={
                        $set:{
                            "username":username,
                            "password":pwd
                        }}
                    db.collection("after").updateOne(where,update,(err,result)=>{
                        res.send({"msg":"修改成功"})
                    })       
                });
            })
        }