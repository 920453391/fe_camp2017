//打印2018年2月份的星期三的日期，以及距今的天数
function daysBefore() {
	var now=new Date();
	var d=new Date(2018,2,1)
	for (var i = 0; i < 29; i++) {
		if(d.getDay()===3) {
			var db=Math.floor((d.getTime()-now.getTime())/86400000);//把相差的毫秒数转换为天数
			console.log('date:        '+d.getFullYear()+'/'+d.getMonth()+'/'+d.getDate());
			console.log('daysBefore:  '+db);	
			console.log('\n');
		}
		d.setDate(d.getDate()+1)
	}
}
daysBefore();