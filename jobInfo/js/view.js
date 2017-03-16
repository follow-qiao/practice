//数据转换(获取社会招聘信息数据)
var soceityData=aData.sh.text;
//数据转换(获取校园招聘信息数据)
var campusData=aData.xy.text
//数据转换(获取招聘对象数据)
var typeDate=aData.list

//招聘条数数组
var jopNum=createList(soceityData);
//招聘对象数组
var jopObj=creatType(typeDate);
//页数数组
var pageNum=creatPage(soceityData);

//显示右侧招聘条数
jopNum.forEach(function (item,i){
	if(i<4){
		listRight.innerHTML+=item;
	}	
})
//显示左侧招聘对象
jopObj.forEach(function (item,i){
	listLeft.innerHTML+=item;
})
//显示底部page页
pageNum.forEach(function (item,i){
	pages.innerHTML+=item;
})

clickPage()



for(var i=0,len=clickType.length;i<len;i++ ){
	clickType[i].index=i;
	clickType[i].onclick=function (){
		for(var j=0,len=clickType.length;j<len;j++ ){
			clickType[j].firstElementChild.style.color='';
		}
		var n=this.index;
		this.firstElementChild.style.color='#ff2c4f';
		prev=this;
		if(n==0){
			clear(soceityData);
			
		}else{
			clear(campusData);
		}
		clickPage();
	}
	
}

//点击page
function clickPage(){
	
	for(var i=0,len=clickPages.length;i<len;i++){
		
		var prev=clickPages[0];
	//---用dom的方法可以用数组里的结点，否则不行
		clickPages[i].index=i;
		clickPages[i].onclick=function (){
			listRight.innerHTML='';
	//------获取当前的序号一定要存一下，也就是要用自定义属性(因为for循环太快了，瞬间执行完，如果不存forEach里i是执行完的数)
			var n=this.index
			prev.style.color='';
			this.style.color='#ff2c4f';
			prev=this;
			jopNum.forEach(function (item,j){
				if(j>=0+n*4&&j<=(n+1)*4-1){
					console.log(item)
					listRight.innerHTML+=item;
				}	
			})
		}
	}
}

//清空样式
function clear(data){
	jopNum=createList(data);
	pageNum=creatPage(data)
	listRight.innerHTML='';
	pages.innerHTML='';
	jopNum.forEach(function (item,i){
		
		if(i<4){
			listRight.innerHTML+=item;
		}	
	})
	//显示底部page页
	pageNum.forEach(function (item,i){
		
		pages.innerHTML+=item;
	})
}
//点击每一个招聘信息
function jobInfo(){
	for(var i=0,len=clickJob.length;i<len;i++){
		clickJob[i].onclick=function (){
			
		}
	}
}
