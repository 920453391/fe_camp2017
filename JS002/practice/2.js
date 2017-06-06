//在以逗号为分隔符的字符串中去掉重复的字符串
/*
数组去重复函数reduplicateArray（）：
1.创建一个新的数组存放结果
2.创建一个空对象
3.for循环时，每次取出一个元素与对象进行对比，如果这个元素不重复，则把它存放到结果
数组中，同时把这个元素的内容作为对象的一个属性，并赋值为1，存入到第2步建立的对象中。
说明：至于如何对比，就是每次从原数组中取出一个元素，然后到对象中去访问这个属性，
如果能访问到值，则说明重复。
*/
//prtotype属性能向对象添加方法
Array.prototype.reduplicateArray=function(){
	 var res = [];
	 var json = {};
	 for(var i = 0; i < this.length; i++){
	  if(!json[this[i]]){
	   res.push(this[i]);
	   json[this[i]] = 1;
	  }
	 }
 return res;
}
function reduplicateString(a){
	var b=new Array;
	b=a.split(/[,，]/);//split()实现按逗号分隔字符串
	return b.reduplicateArray();
}
//测试
console.log(reduplicateString("游泳，健身,篮球,游泳，篮球,阅读"));