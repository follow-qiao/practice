//生成右侧的招聘信息
function createList(data){
	//声明一个空数组用来存放数据,方便对每一项数据操作
	var listArr=[];
	var str=null;
	for(var i=0,len=data.length;i<len;i++){
		
		//获取时间
		var date=data[i].sj.join('-');
		//获取岗位需求
		var requir=(data[i].info[0]).l.join(' ')
		str=`<li>
				<span class="select_line"></span>
				<span class="order fl">${i}</span>			
				<div class="recruit-text fl">
					<div class="recruit-desc">
						<span>职位需求: </span>
						<span>${data[i].zw}</span>
						<span>需求人数: </span>
						<span>${data[i].rs}</span>
						<span class="time">${date}</span>
					</div>
					<div class="requir">
						<span class="fl">岗位需求:${requir}</span>
						<a href="javascript:;">查找详情<i>>></i></a>
					</div>
				</div>
			</li>`	
		listArr.push(str);
	}
	return listArr
}
//生成换页结构
function creatPage(pageData){
	var pageArr=[];
	var str=null;
	var pageNum=Math.ceil(pageData.length/4);
	for(var i=0;i<pageNum;i++){
		str=`<a href="javascript:;">${i}</a>`	
		pageArr.push(str);
	}
	return pageArr;
}


//生成招聘结构
function creatType(typeDate){
	var typeArr=[];
	var str=null;
	for(var i=0,len=typeDate.length;i<len;i++){
		str=`<li class="society">
				<h4>${typeDate[i].text}</h4>
				<span>${typeDate[i].eng}</span>
			</li>`
		typeArr.push(str)
	}
	return typeArr;
}

