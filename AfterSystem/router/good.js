module.exports=function(add,multer,fs){
    console.log(1)
    add.post("/goods_add",function(req,res){
        console.log(2)
        var upload=multer({"dest":"AfterSystem/uploads/"}).single('img');
        upload(req,res,function(err){
            console.log(req.file)
            //文件改名
             var arrname=req.file.originalname.split(".")[1]
             var filename=req.file.path+"."+arrname;
             fs.renameSync(req.file.path,filename)
             res.send({"errno":0,"data":filename.replace('AfterSystem','')})
        })
    })
}