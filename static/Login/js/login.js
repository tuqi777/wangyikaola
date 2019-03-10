var yz=document.getElementById("yanzhengmabutton");
    
function yanzheng(){
    var str="";
    for (let i = 1; i <=4; i++){
        var code=rand(48,122);
        if (code>=58&&code<=64||code>=91&&code<=96) {
            i--;
        } else {
            var ch=String.fromCharCode(code);
            str+=ch;
        }
    }
    return str;
}    
yz.innerHtml=yanzheng();
yz.onclick=function(){
    var res=yanzheng();
    yz.innerHTML=res;
    yz.style.color=getColor();   
}


var flaguu=null;
var flagpp=null;
$(".regformlogin").on("submit",function(e){
    e.preventDefault();
    var adminname=$(".phonetext-login").val(); 
    var adminpass=$(".passbox-login").val();
    console.log(adminname,adminpass);
    if(adminname==""||adminpass==""){
        alert("登录失败！请正确输入！")
        return false;
    }else{
        $.post("/user_login",{"username":adminname,"password":adminpass},function(result){
            if (result.state==1) {
                alert("登录成功！考拉欢迎您！")
                location.href="./../../index.html"

            } else if(result.state===0){
                alert("登录失败，用户名不存在！")
            }else if(result.state===2){
                alert("登录失败，密码输入错误！")
            }    
        })
        
    }
})
    // var storage=window.localStorage;
    // var brr=storage.list;
    // var arr=JSON.parse(brr);    
    
    // console.log(typeof arr)
    // for(let i in arr){
    //     console.log(4)
    //     if ($(".phonetext-login").val()==arr[i].uname) {
    //             flaguu=true;
    //             if ($(".passbox-login").val()==arr[i].upwd) {
    //                 flagpp=true;
    //                 }
    //         }
    //     }
    //      if(flaguu==null){
    //         alert("用户名不存在")
    //     }
    //     if(flaguu&&flagpp==null){
    //         alert("密码错误")
    //     }
        
    //     if(flaguu&&flagpp){
    //         alert("登录成功！")
    //         location.href="file:///D:/phpStudy/WWW/wangyiproject/index.html"; 
            
    //     }else{
    //         alert("登录失败！")
    //     }
       
