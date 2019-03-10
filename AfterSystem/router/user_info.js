//module.exports=function(app,MongonClient,crypto,url){
    module.exports=function(add,MongoClient,crypto,url,ObjectId){
    
        add.get("/user_info",function(req,res){
                
                var id=req.query.id;

                MongoClient.connect(url, (err, database)=>{
                    // 操作数据库的代码，必须写在里面
                    var db=database.db("bk1819");
                    var where={_id:ObjectId(id)}
                    db.collection("after").find(where).toArray((err,result)=>{
                        res.send(JSON.stringify(result))
                    })       
                });
            })
        }