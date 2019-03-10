var timer=null,
    index=0;
var $ulist=$("#imgbox>li"),
    $splist=$("#xiabiao li");
timer=setInterval(autoPlay,3000);
function autoPlay(){
    index++;
    if (index==$ulist.size()) {
        index=0;
    }
    $splist.eq(index).addClass("current").siblings().removeClass("current");
    $ulist.eq(index).fadeIn(200).siblings("li").fadeOut(200);
}    
$splist.mouseenter(function(){
    clearInterval( timer );
    index=$(this).index()-1;
    autoPlay();
}).mouseleave(function(){
    timer=setInterval(autoPlay,3000);
})
/*
	 思路 ： 
	 触发滚动条时， 判断 页面滚走的距离 如果大于 头部的高度，开始吸顶
	 如何吸顶 ：   使用 fixed
	 */
    //获取头部的高度
    var tp=document.getElementsByClassName("top")[0];
    var logo=document.getElementsByClassName("logowrap")[0];
    var logo1=document.getElementsByClassName("logo")[0];
    var jueye=document.getElementsByClassName("juwrap")[0];
    console.log(typeof tp);
    var h =tp.style.height;
    console.log(tp.offsetHeight);
    // var t=header.style.top;
	window.onscroll = function(){
		//获取页面滚走的距离
		var sTop = document.documentElement.scrollTop || document.body.scrollTop;
		if( sTop > h ){
			//固定nav导航条
			logo.style.position = "fixed";
            logo.style.top = 0;
            // logo.style.left = 206+"px";
            logo.style.background="white";
            logo1.style.background="white";
            logo.style.zIndex=99999999;
		}else{
            logo.style.position = "";
            logo.style.background="";
            logo1.style.background="";
        }
        if (sTop>400) {
            jueye.style.position = "fixed";
            jueye.style.top = 140+"px";
            jueye.style.left=77+"px"
        } else {
            jueye.style.position = "";
        }
    }
    //限时购买倒计时
    var daojishi=document.getElementsByClassName("daojishi")[0].children;
    
    var start= new Date();
    var end= new Date("2019-02-09 00:00:00");
    var tim=diff(start,end);
    console.log(tim);
    function showtime(){
        if(tim<0){
            daojishi[0].innerHTML="00"; 
            daojishi[2].innerHTML="00";
            daojishi[4].innerHTML="00";
        }
        var h=parseInt(tim/3600);
        var m=parseInt((tim-h*3600)/60);
        var s=parseInt(tim-h*3600-m*60);
        if (h/10>=1) {
            daojishi[0].innerHTML=h; 
        } else {
            daojishi[0].innerHTML="0"+h;
        }
        if (m/10>=1) {
            daojishi[2].innerHTML=m; 
        } else {
            daojishi[2].innerHTML="0"+m;
        }
        if (s/10>=1) {
            daojishi[4].innerHTML=s; 
        } else {
            daojishi[4].innerHTML="0"+s;
        }
    }
    var timer=setInterval(function(){
        tim--;
        if (tim<0) {
            showtime();
            clearInterval(timer);
        } else {
            showtime()
            
        }
    },1000)

    	
