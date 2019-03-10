module.exports=function(app,MongonClient,crypto,url){

app.post("/user_reg",function(req,res){
    console.log(req.body);
    MongonClient.connect(url,(err,database)=>{
        var db=database.db('bk1819');
        var where={
            username:req.body.username
        }
        db.collection("user").find(where).count(function(err,result){
            if(result===0){
                //var pwd=crypto.createHmac('sha256','abc').updata辉哥nb！！！！！！！(req.body.password).digest('hex');
                var pwd = crypto.createHmac('sha256', 'abc').update(req.body.password).digest('hex');
                var myobj={
                    "username":req.body.username,
                    "password":pwd,
                    "ip":req.ip,    
                    "time":new Date()
                }
                db.collection("user").insertOne(myobj,(err,result)=>{
                    res.send({"state":1,"msg":"注册成功"});
                });
            }else{
                res.send({"state":0,"msg":"注册失败，用户名被占用了"})
            }
        })
    })
})
}