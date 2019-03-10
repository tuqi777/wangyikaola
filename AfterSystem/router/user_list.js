//module.exports=function(app,MongonClient,crypto,url){
    module.exports=function(add,MongoClient,crypto,url){
        
        add.get("/user_list/:page/:num",function(req,res){
                var page=req.params.page*1;
                var num=req.params.num*1;
                var wd=req.query.wd;
                //求最大页数
                
                MongoClient.connect(url, (err, database)=>{
                    // 操作数据库的代码，必须写在里面
                    var db=database.db("bk1819");
                    var dt1=new Date().getTime();
                    
                    var where={}
                    if (wd) {
                        where["username"]=new RegExp(wd,"i");
                    }
                    
                    db.collection("after").find(where).count((err,result)=>{
                        var count=result;
                        var maxpage=Math.ceil(result/num)
                        db.collection("after").find(where).sort({time:-1}).skip((page-1)*num).limit(num).toArray((err,result)=>{
                            //当前page页的num条信息
                            
                            var dt2=new Date().getTime();
                            var obj={
                                "maxpage":maxpage,
                                count,
                                page,
                                result,
                                ms:dt2-dt1
                            }
                            
                            res.send(obj)
                        })
                    })       
                });
            })
        }