$(".list_num").mouseenter(function(){
    $(".vip").css("display","block");
}).mouseleave(function(){
    $(".vip").css("display","none");
})
$(".vip").mouseenter(function(){
    $(".vip").css("display","block");
}).mouseleave(function(){
    $(".vip").css("display","none");
})
//放大镜jing'jing'jing'jing'jing'jing
var bot=document.querySelector("#bbttm");
	var ban=document.getElementById("banner").children;
	var list=bbttm.getElementsByTagName("li");
	var bigimg=document.getElementById("bigg").children;
	var mask=document.getElementById("mask");
	var index=0
	for (i=0;i<list.length;i++) {
		list[i].paixu=i
		list[i].onmouseover=function(){
			for (j=0;j<4;j++) {
				ban[j].style.display="none";
			}
			index=this.paixu;
			ban[index].style.display="block";
		}	
	}
	box.onmouseover=function(){
		bigg.style.display="block";
		for (a=0;a<4;a++) {
			bigimg[a].style.display="none";
		}
		bigimg[index].style.display="block";
		mask.style.display="block";
	}
	box.onmouseout=function(){
		bigg.style.display="none";
		mask.style.display="none";
	}
	box.onmousemove=function(e){
		var e=e||event;
		var ch=index+1;
		var y=e.pageY-mask.offsetHeight/2-box.offsetTop;
		var x=e.pageX-mask.offsetHeight/2-box.offsetLeft;
		var maxT=box.offsetHeight-81 - mask.offsetHeight;
		var maxL=box.offsetWidth-1 - mask.offsetWidth;
		x = x < 0 ? 0 : ( x > maxL ? maxL : x );
		y = y < 0 ? 0 : ( y > maxT ? maxT : y );
		mask.style.left=x+"px";
		mask.style.top=y+"px";
		var x1=x*(bigimg[index].offsetWidth)/(box.offsetWidth-1);
		var y1=y*(bigimg[index].offsetHeight)/(box.offsetHeight-81);
		bigimg[index].style.left=-x1+"px";
		bigimg[index].style.top=-y1+"px";
    }
    //倒计时！！！！！！！！！！！！！！！！！！！
    var daojishi=document.getElementsByClassName("daojishi")[0].children;
    
    var start= new Date();
    var end= new Date("2018-12-09 00:00:00");
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
        // var n=parseInt((tim-h*3600-m*60-s*1000)/1);
        // daojishi[6].innerHTML=n;
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