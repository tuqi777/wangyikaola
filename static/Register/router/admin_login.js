module.exports=function(app,MongonClient,crypto,url){


    app.post("/user_login",function(req,res){
        MongonClient.connect(url,(err,database)=>{
            var db=database.db('bk1819');
            var pwd=crypto.createHmac('sha256','abc').update(req.body.password).digest('hex');
            var where={
                username:req.body.username

            }
            console.log(req.body.username,pwd)
            db.collection("user").find(where).count(function(err,result){   
                var wherepwd={password:pwd}
                if(result===0){ 
                    res.send('{"state":0,"msg":"登录失败，用户名不存在"}');
                }else if(result===1){
                    db.collection("user").find(wherepwd).count(function(err,result){
                    console.log(result);
                    if (result===0) {
                        res.send({"state":2,"msg":"登录失败，密码不正确！"})
                    } else{
                        res.send({"state":1,"msg":"登录成功，"+req.body.username+" 欢迎回来！"})
                    }

                    });
                }
            })
        })
    })
}