// 点击登录按钮，进行面板注册/登录切换
var $LB=$("#login-button"),
    $regform=$(".regform"),
    $regformlogin=$(".regformlogin");
$LB.click(function(){
    $regform.css("display","none");
    $regformlogin.css("display","block");
    return false;
})
// 验证码字符串及颜色的随机变化
var yz=document.getElementById("yanzhengmabutton"),
    yzl=document.getElementsByClassName("yanzhengmabutton-login")[0];
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
yzl.innerHtml=yanzheng();
yz.onclick=function(){
    var res=yanzheng();
    yz.innerHTML=res;
    yz.style.color=getColor();
    
}
yzl.onclick=function(){
    yzl.innerHTML=yanzheng();
    yzl.style.color=getColor();
}
// 存入loaclstorage、正则验证实现登录注册
var reg=/^1[35789]\d{9}$/;
var peg=/^.{6,}$/;
var reform= $(".regform");
var phoneflag=null;
$(".phonetext").on("keyup",function(e){
    var e=e||event;
    var ddd=parseInt($(".phonetext").val());
    if($(".phonetext").val().length==11){
        if(reg.test(ddd)==true){
            phoneflag=true;
             $(".phonenumtext").css("display","none"); 
        }else{
            phoneflag=false;
            $(".phonenumtext").css("display","block");    
        }    
    }
})
var yanzhengflag=null;
$(".yanzhengmatext").on("blur",function(e){
    var e=e||event;    
    if($(".yanzhengmatext").val().length==4){
        if($(".yanzhengmatext").val()==$("#yanzhengmabutton").html()){
            yanzhengflag=true;
            $(".yanzhengtext").css("display","none");

        }else{
            
            yanzhengflag=false;
            $(".yanzhengtext").css("display","block");    
        } 
    }   
})
var passflag=null;
$(".passbox").on("keyup",function(e){
    var e=e||event;
    var ddd=parseInt($(".passbox").val());
    if($(".passbox").val().length>=6){
        if(peg.test(ddd)){
            passflag=true;
             $(".passtext").css("display","none"); 
        }else{
            passflag=false;
            $(".passtext").css("display","block");    
        }    
    }else{
        passflag=false;
        $(".passtext").css("display","block");
    }
})

$("form").on("submit",function(e){
    e.preventDefault();
    var user=$('.phonetext').val();
    var pass=$('.passbox').val();
    if(user==""||pass==""){
        alert("注册失败！请正确输入")
    }else{
     $.post("/user_reg",{"username":user,"password":pass},function(result){
        
        alert(result);
        if (result.state==1) {
            alert("你好吖！");
            location.href="../../Login/login.html";
        } else {
            return false;
        }    
    })   
    }
})
    
//     if (phoneflag&&passflag&&yanzhengflag) {
//         var storage=window.localStorage;
//         if(storage.list.length>0){
//              var b=storage.list;
//              arr=JSON.parse(b);       
//         }else{
//             var arr=[];
//         }
//         var obj={
//             uname:$(".phonetext").val(),
//             upwd:$(".passbox").val()
//         }
//         arr.push(obj);
//         console.log(arr);         
//         storage.setItem("list",JSON.stringify(arr));
        
//         location.href="C:Users/Administrator/Desktop/LPlarge/Login/login.html"
//         return true;
//     } 
//     else {
//         alert("注册失败！请正确输入！"); 
//         return false;
                
//     }
//     return false;
// })
