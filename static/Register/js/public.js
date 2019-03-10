//函数功能根据id查找页面元素
function $id(id){
	return document.getElementById(id);
}
//定义一个函数  功能是创建某个元素
function create(ele){
	return document.createElement(ele);
}
//根据标签查找页面元素
function $tagName(tagname){
	return document.getElementsByTagName(tagname);
}
function $class(ClassName){
	return document.getElementsByClassName(ClassName);
}

//写一个函数 功能获取任意区间值公式
function rand(min,max){
	return Math.round(  Math.random()*(max-min) + min );
}

//获取六位十六进制颜色值
function getColor(){
	var str = "0123456789abcdef";
	var color = "#";//拼接六位十六进制字符
	for( var i = 1 ; i <= 6 ; i++ ){
		color += str.charAt( rand(0,15) );
	}
	return color;
}
function dataToString( now , sign ){
	//sign表示日期的拼接符号
	//设置sign的默认值  如果用户传递sign参数 就使用用户传递的参数
	//否则就使用默认值
	sign = sign || "-";
	
	//获取日期的年月日 
	var y = now.getFullYear();
	var m = now.getMonth() + 1;
	var d = now.getDate();
	//获取日期的时分秒
	var h = toTwo( now.getHours() );
	var mi = toTwo( now.getMinutes() );
	var s = toTwo( now.getSeconds() );
	//定义自己的时间格式
	var str = y + sign + m + sign + d + " " + h + ":" + mi + ":" + s;
	return str;
}
//定义一个函数 功能是在小于10的数字前拼接0
function toTwo( num ){
	return num < 10 ? "0" + num : num;
}

//定义一个时间差函数 
function diff(start,end){
	return (end.getTime() - start.getTime())/1000;
}

//字母数字验证码
function yzm(){
	var str = "";//用来存放验证码
	for( var i = 1 ; i <= 6 ; i++ ){
		var code = rand(48,122);
		if( code >= 58&&code <= 64 ||code >= 91 && code <= 96 ){
			i--;
		}else{
			var ch = String.fromCharCode( code );
			str += ch;
		}
	}
	//console.log( str );
	return str;
}
//碰撞
function pz(obj1,obj2){
	var L1 = obj1.offsetLeft;
	var R1 = obj1.offsetLeft + obj1.offsetWidth;
	var T1 = obj1.offsetTop;
	var B1 = obj1.offsetHeight + obj1.offsetTop;
	
	var L2 = obj2.offsetLeft;
	var R2 = obj2.offsetLeft + obj2.offsetWidth;
	var T2 = obj2.offsetTop;
	var B2 = obj2.offsetHeight + obj2.offsetTop;
	
	//如何碰不上 返回false   碰上返回true
	if( R1<L2||L1>R2||B1<T2||T1>B2 ){//碰不上
		return false;
	}else{
		return true;
	}
}