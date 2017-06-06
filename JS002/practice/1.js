//密码字符串中去掉-连接符，并判断是否为为20位
function tr(a) {
	var reg=new RegExp('-',"g");//创建正则RegExp对象
	var b=a.replace(reg,"");//使用replace函数替换
	if(b.length===20) return b.toUpperCase();
	else return "异常：无效的密码格式";
}
//测试
var c="3efu8-rt67f-e42op-8rpol",d="dawo";
console.log(tr(c));
console.log(tr(d));


