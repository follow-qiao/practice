//生成左侧列表的结构(id是控制当前选中的颜色的)
function createTree(data,id){
	var str='';
	for(var i=0,len=data.length;i<len;i++){
		if(data[i].checked) continue;
		str+=`<li class="yun_list_one">
				<div class="${data[i].id==id ? 'active' :''}" data-id="${data[i].id}" style="padding-left:${data[i].level*18+'px'}">
					<i class="${data[i].child.length!==0? "add":''}" ></i>
					<i></i>
					<span>${data[i].name}</span>
				</div>`
		if(data[i].child){
			str+=`<ul>${createTree(data[i].child,id)}</ul>`
		}	
		str+=`</li>`
	}
	return str;
}

//生成单个文件夹
//生成右侧文件夹
function createFiles(data,id){
	var str='';
	if(!data){
		return str;
	}
	for(var i=0,len=data.length;i<len;i++){
		str+=`<li data-id="${data[i].id}">
				<i class="file_icon"></i>
				<span class="text" >${data[i].name}</span>
				<input class="change_name" type="text" value="${data[i].name}"/>
				<span class="check" data-id="${data[i].id}"></span>
			</li>`
	}
	return str;
}
//生成面包屑结构
function createBanner(data,id){
	var str=''
	for(var i=0,len=data.length;i<len;i++){
		str+=`<li class="fl" data-id="${data[i].id}">
				<span>${data[i].name}</span>
				<i></i>
			 </li>`
	}
	return str;
}


//用Dom的方法生成单个文件夹
function createFileNode(){
	//创建最外层结构
	var li=document.createElement('li');
	//创建文件夹图标
	var fileIcon=document.createElement('i');
	fileIcon.className='file_icon';
	//创建文本框
	var fileName=document.createElement('span');
	fileName.className='text';
	//创建input
	var fileChangeName=document.createElement('input');
	fileChangeName.className='change_name';
	fileChangeName.type='text';
	//创建勾选框
	var fileCheckbox=document.createElement('span')
	fileCheckbox.className='check'
	li.appendChild(fileIcon);
	li.appendChild(fileName);
	li.appendChild(fileChangeName);
	li.appendChild(fileCheckbox);
	return li;
}

