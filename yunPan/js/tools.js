//操作数据的工具方法；(由于结构一样会用到递归)


//声明一个空对象用来存获取数据的函数
var wy={};

//获取当前Id所在对象的函数
wy.getDateById=function(data,id){
	var idObj=null;			//先声明一个空对象(得到的结果在负值给它，就会得到想要的函数)
	for(var i=0,len=data.length;i<len;i++){
		//数字要判断类型的
		if(data[i].id==id){
			idObj=data[i];
			//如果找到想要的数据，就没必要在执行了
			break;
		}
		//第一个if没找到时，要看他是否有子菜单，有的话继续循环此函数
		if(!idObj&&data[i].child){
			//继续自己玩自己
			idObj=this.getDateById(data[i].child,id)
		}
	}
	return idObj;
}
//获取当前id所在对象的所有子集所有子集createTree
wy.getChildrenById=function (data,id){
	//声明一个变量，存当前id下的对象
	var targetData=this.getDateById(data,id);
	//判断当前id下是否有对象和如果有,当前对象是否有child(子集)
	if(targetData&&targetData.child){
		return targetData.child;
	}
}
//获取到当前id下的对象和父元素对象(pid)
wy.getParentsById=function (data,id){
	var items=[];
	var current=this.getDateById(data,id)    //声明一个当前id下的对象
	if(current){
		items.push(current)
		items=items.concat(this.getParentsById(data,current.pid))  //在获取父级对象(递归传入当前的pid就是上一级)
	}
	return items;
}
// 获取根节点
wy.getRoot=function (data){
  for(var i=0; i<data.length; i++){
    if(data[i].type === 'root'){
      return data[i];
    }
  }
}

// 设置并返回最大id
wy.maxId=function (data){
  return wy.getRoot(data).maxId = wy.getRoot(data).maxId + 1;
}

wy.nameCanUse=function (data,name,replaceData){
	for(var i=0;i<data.length;i++){
		if(data[i].name===name){
			if(replaceData){
		       data[i] = replaceData;
		        data[i].name = data[i].name + '(新)';
		       break;
		    }
			return false;
		}
	}
	return true;
}
//判断当前id下有无子集
wy.hasChild=function(data,id){
	return wy.getChildrenById(data,id).length!==0

}
