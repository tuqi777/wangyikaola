//module.exports=function(app,MongonClient,crypto,url){
    module.exports=function(add,MongoClient,crypto,url,ObjectId){
    
        add.get("/user_del",function(req,res){
                
                var id=req.query.id;

                MongoClient.connect(url, (err, database)=>{
                    // 操作数据库的代码，必须写在里面
                    var db=database.db("bk1819");
                    var where={_id:ObjectId(id)}
                    db.collection("after").deleteOne(where,(err,result)=>{
                        res.send("删除成功")
                    })       
                });
            })
            add.post("/user_del",function(req,res){
                var ids=req.body.ids;
                var arr=ids.split(",");
                var arr2=arr.map(function(id){
                    return ObjectId(id) 
                })
                MongoClient.connect(url, (err, database)=>{
                    // 操作数据库的代码，必须写在里面
                    var db=database.db("bk1819");
                    var where={_id:{$in:arr2}}
                    db.collection("after").deleteMany(where,(err,result)=>{
                        res.send("删除成功")
                    })       
                });
            })
        }