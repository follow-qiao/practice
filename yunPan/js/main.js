//数据转换
var data=user_data.files;
//获取左侧树状菜单父级
var menuTreeParentNode=document.querySelector('.list');
//获取右侧文件夹的父容器
var filesParentNode=document.querySelector('.detail_main');
//获取右侧没有文件夹时的父级
var noneFilesNode=document.querySelector('.none_files');
//获取到导航线的父容器
var bannerLinerParent=document.querySelector('.file_tier');


//获取头部区域的父级
var headParent=document.querySelector('.head');
//获取主内容区的父级
var mainParent=document.querySelector('.yun_list');
//获取头部固定高度
var headHeight=headParent.offsetHeight;//边框以里


//获取全选框
var fileCheckAll=document.querySelector('.detail_top .fram')
//获取成功操作的提示框
var seccTip=document.querySelector('.tip .del');
//获取失败时的提示框
var failTip=document.querySelector('.tip .select_file');

changeHeight();//设置默认高度
//主内容区自适应高度
function changeHeight(){
	//获取文档的可视区域高度
	var viewHeight=document.documentElement.clientHeight;
	mainParent.style.height=viewHeight-headHeight+'px';
	//文件夹区域可视区的高度
}
//设置文件夹区域的自适应高度
window.onresize=changeHeight; //高度不断变化
window.onresize=filesParentNode.style.height=mainParent.clientHeight-bannerLinerParent.offsetHeight-42+'px';
window.onresize=noneFilesNode.style.height=mainParent.clientHeight-bannerLinerParent.offsetHeight-2+'px';


//设置当前标题Id
var currentId=0;
var currentData=null;
var isNameing=false;
//设置默认样式
currentData=showHTML(data,currentId)

//获取当前点击树状菜单标题的id，生成左右两侧的结构
menuTreeParentNode.addEventListener('click',function(e){
	//获取当前id;
	if(e.target.nodeName.toUpperCase()=='I'||e.target.nodeName.toUpperCase()=='SPAN'){
		currentId=e.target.parentElement.dataset.id //获取当前点击的标题Id
	}else if(e.target.nodeName.toUpperCase()=='DIV'){
		currentId=e.target.dataset.id;
	}
	initChecked()
	currentData=showHTML( data,currentId );
	changFileParent(data,currentId)
})
//获取当前点击文件夹的id，生成左右两侧的结构
filesParentNode.addEventListener('click',function(e){
	//获取当前id;渲染数据
	if(e.target.classList.contains('file_icon')){
		currentId=e.target.parentElement.dataset.id //获取当前点击的标题Id		
		initChecked()
		currentData=showHTML( data,currentId )
		changFileParent(data,currentId)
	}else if(e.target.nodeName.toUpperCase()=='LI'){
		currentId=e.target.dataset.id	
		initChecked()
		currentData=showHTML(data,currentId)
		changFileParent(data,currentId)
	}
//-------------给文件夹的check添加点击事件并改变数据的checked---------
	if(e.target.classList.contains('check')){
		//获取所有的勾选框
		var checkAll=this.querySelectorAll('li .check')
		var checkWrap=e.target;//用来存取想要的勾选框的最外层元素
		//获取当前id所在的对象
		var checkParentObj=wy.getDateById(data,checkWrap.dataset.id);
		//选中时
		checkWrap.classList.toggle('select');
		//改变数据中是否选中的状态
		if(checkWrap.classList.contains('select')){
			checkParentObj.checked=true;
		}else{
			checkParentObj.checked=false;
		}
		//判断是否全选
		if(isClectAll(currentData)){
			fileCheckAll.classList.add('select-all');
			
		}else{
			fileCheckAll.classList.remove('select-all');
		}
		
		 filesParentNode.down = false;//阻止冒泡的
	}
	if(e.target.classList.contains('text')){
		initChecked() //取消全选
		reNewName(e.target,e.target.parentNode.dataset.id)
	}
	
//	e.stopPropagation();
	
	
})

//阻止冒泡；
filesParentNode.addEventListener('mousedown',function(e){
	if(e.target.classList.contains('check')){
//		e.stopPropagation();
		filesParentNode.down = true;
	}
})

//获取当前点击面包屑的id；生成左右两侧的结构
bannerLinerParent.addEventListener('click',function(e){
	//获取当前id;
	if(e.target.nodeName.toUpperCase()!=='LI'){
		currentId=e.target.parentElement.dataset.id //获取当前点击的标题Id
	}else{
		currentId=e.target.dataset.id
	}
	initChecked()
	currentData=showHTML( data,currentId );
	changFileParent(data,currentId)
})


//---------获取新建文件夹按钮-----------
var createNewFile=document.querySelector('.function li:nth-last-child(2)');
//点击新建文件夹
createNewFile.onclick=function(){
	initChecked()
	if(isNameing) return;
	//如过当前有被选中的文件，就取消选中；
	if(isBeClected().length){
		for(var i=0;i<currentData.length;i++){
			filesParentNode.children[i].lastElementChild.classList.remove('select');
		}
	}
	//用变量存用dom方法生成的节点
	var createNewFileNode=createFileNode();
	//将节点插入在最前面
	filesParentNode.insertBefore(createNewFileNode,filesParentNode.firstElementChild)
	//有无子集新建文件夹的两种情况
	if(wy.hasChild(data,currentId)){
		addNewFile(createNewFileNode,data)
	}else{
		noneFilesNode.style.display='none';
		filesParentNode.style.display='flex';
		addNewFile(createNewFileNode,data)
	}
}

//--------点击全选按钮-----------
fileCheckAll.onclick=function (){
	//全选是的效果
	fileCheckAll.classList.toggle('select-all');
	for(var i=0;i<currentData.length;i++){
		//如果当前状态是全选，就让所有子集全选；
		if(fileCheckAll.classList.contains('select-all')){
			currentData[i].checked=true;
			filesParentNode.children[i].lastElementChild.classList.add('select')
		}else{
			currentData[i].checked=false;
			filesParentNode.children[i].lastElementChild.classList.remove('select')
		}
	}
}
//------------------点击重命名按钮------------
//获取重命名按钮
var reNameBtn=document.querySelector('.function .rename');
reNameBtn.onclick=function (){
	//被选中的数据长度为0，大于1，等于1(才能执行重命名)
	if(!isBeClected().length){
		alert('请选择要命名的文件')
	}else if(isBeClected().length>1){
		alert('一次只能修改一个')
	}else{
		//alert('成功进入修改')
//-----获取当前文本框把它隐藏；获取input显示出来；并获取焦点开始进入修改
		//先获取父节点，用节点的方法获取；
		var reNameNode=getReNameNode(filesParentNode,isBeClected()[0].id);
		//获取文本框
		var reNameText=reNameNode.querySelector('.text');
		reNewName(reNameText,reNameNode.dataset.id)
		initChecked() //取消全选
	}
}
//------------点击删除按钮-------------------
var delet=document.querySelector('.function .delet')//获取点击删除按钮

delet.onclick=function (){
	//是否有文件；
	if(!currentData.length){
		console.log('无可删除的文件')
	}else{
		//是否有选中的文件
		if(isBeClected().length){
			//删除相应的数据
			delectFile();
			//重新渲染数据
			initChecked()//取消全选
			currentData=showHTML(data,currentId);
			
		}else{
			console.log('请选择要删除的文件')
		}
	}
}

//-----------点击移动按钮-------------------------
var moveFile=document.querySelector('.function .move')//获取移动的父级元素按钮
var moveShade=document.querySelector('.box .shade')//获取到移动遮罩层元素
var moveFileWrap=document.querySelector('.move-function')//获取移动到列表的弹出框元素
var moveToList=document.querySelector('.move-function .move-to')//获取到移动到的列表父级
var moveListClose=document.querySelector('.move-function .close-icon')//获取到关闭移动到列表按钮
var moveSure=document.querySelector('.chose-btn .sure')//弹出框确定按钮
var moveConcel=document.querySelector('.chose-btn .concel')//弹出框取消按钮
moveFile.onclick=function (){
	//是否选中要移动的文件，如果已选中：把已选中的数据存起来；
	//移动到非子集这级，移入时判断是否命名冲突；
	if(!isBeClected().length){
		alert('请选择要移动的文件')
	}else{
		//获取到框选的数据(要移动的数据)
		var isCheckedDatas=isBeClected();
		moveShade.style.display='block';//显示出遮罩层
		moveFileWrap.style.display='block';	//显示弹出框
		//生成弹出框列表结构
		moveToList.innerHTML=createTree(data,currentId);
		//获取根目录标题
		var rootTitle=moveToList.firstElementChild.firstElementChild
		//给根目录添加默认样式
		rootTitle.classList.remove('active')
		//调用弹出框无限极菜单函数
		linitMenu(moveToList)
	}
}
//点击弹出框的取消按钮和关闭按钮
moveConcel.onclick=moveListClose.onclick=function(){
	moveShade.style.display='none';//显示出遮罩层
	moveFileWrap.style.display='none';	//显示弹出框
}
//-------------框选文件夹-----------------------
filesParentNode.onmousedown=function (e){
	if(this.down) return;	//点击文件夹上的小框会发生冒泡,阻止冒泡；
	if(isNameing) return;  // 重命名的时候不允许画框
	initChecked() //取消全选
	var target=e.target;
	e.preventDefault();
	//当鼠标在文件夹上就不执行框选功能；
	if(!target.classList.contains('detail_main')){
		return;
	}
	//获取点击时起始坐标
	var startX=e.pageX,startY=e.pageY;
	var div=document.createElement('div')
	div.className='draw';
	this.parentNode.appendChild(div)
	this.onmousemove=function (e){
		var moveX=e.pageX,moveY=e.pageY;
		var l=Math.min(startX-qy.getRect(this,'left'),moveX-qy.getRect(this,'left'));
		var t=Math.min(startY-qy.getRect(this,'top')+this.previousElementSibling.offsetHeight,moveY-qy.getRect(this,'top')+this.previousElementSibling.offsetHeight);
		var w=Math.abs(moveX-startX);
		var h=Math.abs(moveY-startY);
		
		div.style.width=w+'px';
		div.style.height=h+'px';
		div.style.top=t+'px';
		div.style.left=l+'px';
		bumpFile(div)
	}
	document.onmouseup=function (){
		filesParentNode.onmousemove=document.onmouseup=null;
		filesParentNode.parentNode.removeChild(div)
	}
}
//框选时碰撞时的函数
function bumpFile(ele){	
	//获取当前所有文件夹
	var allFile=filesParentNode.children;
	for(var i=0;i<allFile.length;i++){
		if(qy.duang(ele,allFile[i])&&allFile[i]!==ele){//碰撞检测及排除自身
			wy.getDateById(currentData,allFile[i].dataset.id).checked=true;
			allFile[i].lastElementChild.classList.add('select');//添加勾选
			//文件夹全选时
			if(isClectAll(currentData)){
				fileCheckAll.classList.add('select-all');
			}else{
				fileCheckAll.classList.remove('select-all');
			}
		}else{
			if(allFile[i].lastElementChild.classList.contains('select')){
				allFile[i].lastElementChild.classList.remove('select');
				wy.getDateById(currentData,allFile[i].dataset.id).checked=false;
			}
		}
		
	}
}
//移动到弹出框无限极菜单函数
function linitMenu(ul){
		//获取根目录的所有子集
		var outParentChildren=ul.children;
		for(var i=0;i<outParentChildren.length;i++){
			//获取标题节点
			var clickTitle=outParentChildren[i].firstElementChild;
			clickTitle.onclick=function(){
				//获取所有的标题
				var allTitle=moveToList.querySelectorAll('div')
				//清空样式
				for(var i=0;i<allTitle.length;i++){
					allTitle[i].classList.remove('active');
				}
				//获取当前点击标题的下一级
				var nextSibiling=this.nextElementSibling
				//获取当前标题的所有父级
				var parentParent=this.parentNode.parentNode;
				//获取与当前标题父级同级的所有元素
				var uls=parentParent.querySelectorAll('ul')
				this.classList.add('active')
				for(var i=0;i<uls.length;i++){
					if(uls[i]!=nextSibiling){
						uls[i].classList.remove('show')
						uls[i].previousElementSibling.classList.remove('open');	
					}
				}
				if(nextSibiling.children.length){
					nextSibiling.classList.toggle('show');
					this.firstElementChild.classList.toggle('open');
					this.firstElementChild.nextElementSibling.classList.toggle('open');		
					linitMenu(nextSibiling)
				}
				//获取到当前点击的弹出框列表标题的id
				var moveClickId=this.dataset.id;
				moveSure.onclick=function (){
					//判断当前文件能否移动目标数据中
				 	if(isCanMove(moveClickId,isBeClected())){
      					var targetData = wy.getDateById(data, moveClickId).child;//获取到当前点击弹出框列表当前id下的数据对象；
      					var targetClickPid= wy.getDateById(data, moveClickId).pid
      					console.log(targetClickPid)
      					//移动数据
      					moveSelectedData(targetData,targetClickPid)
      					currentData=showHTML(data,currentId)
					}else{
						alert('已在该文件下，无法移动');
					}
				}
			}
		}
}
//新建文件夹函数
function addNewFile(fileNode,id,level){
	isNameing=true;
	//获取到文本框
	var showName=fileNode.querySelector('.text');
	//获取到input
	var renameInput=fileNode.querySelector('input')
	var parentId=bannerLinerParent.lastElementChild.dataset.id;
	//获取父级的层级
	var level=wy.getDateById(data,parentId).level;
	showName.style.display='none';
	renameInput.style.display='block';
	renameInput.focus();
	renameInput.onblur=function (){
		if(this.value==''){
			fileNode.parentNode.removeChild(fileNode)
			isNameing=false;
		}else{
			if(wy.nameCanUse(currentData,this.value)){
				var filesData = {
		          name: this.value.trim(),
		          id: wy.maxId(data)*1,
		          pid: currentId*1,
		          type: 'folder',
		          checked: false,
		          level:level+1,
		          child: []
		    	}
		        currentData.unshift(filesData);  
		        currentData = showHTML( data,currentId );
				isNameing=false;
			}else{
				this.select();
			}
		}
	}
	 // 回车键
	window.onkeydown = function (e){
	    if(e.keyCode === 13 && renameInput.value !== ''){
	      renameInput.blur();
	    }
	};
}

//重命名函数(点击按钮和文本共用) ele:当前显示的元素，id:所在对象的id；
function reNewName(ele,id){
	isNameing=true;
	//获取input
	var reNameInput=ele.nextElementSibling;
	ele.style.display='none';
	reNameInput.style.display='block';
	var oldName=reNameInput.value;
	//获取焦点
	reNameInput.select();
	reNameInput.onblur=function (){
		var newName=this.value.trim()
		//是否修改；是否命名否冲突
		if(newName===''||newName===ele.innerHTML){
			ele.style.display='block';
			reNameInput.style.display='none';
			//alert('取消命名')
			isNameing=false;
		}else{				
			if(wy.nameCanUse(currentData,newName)){
				//更改数据；获取当前id下的对象
				var reNameId=wy.getDateById(currentData,id)
				reNameId.name=newName;
				ele.innerHTML=newName;
				ele.style.display='block';
				reNameInput.style.display='none';
				alert('命名成功')
				isNameing=false;
			}else{
				console.log('命名冲突')
				this.select();	
			}
		}
	}
	// 回车键
	window.onkeydown = function (e){
	    if(e.keyCode === 13){
	      reNameInput.blur();
	    }
	};
}
//取消全选
function initChecked(){
	fileCheckAll.classList.remove('select-all')
	for(var i=0;i<currentData.length;i++){
		currentData[i].checked=false;
		filesParentNode.children[i].lastElementChild.classList.remove('select')
	}
}
//根据数据获取被重命名的节点
function getReNameNode(parentNode,id){
	var children=filesParentNode.children;
	for(var i=0;i<children.length;i++){
		if(children[i].dataset.id*1===id){
			return children[i]
		}
	}
	return null;
}
//创建函数存储被选中的数据
function isBeClected(){
	var arrCheck=[];
	for(var i=0;i<currentData.length;i++){
		if(currentData[i].checked){
			arrCheck.push(currentData[i]);
		}
	}
	return arrCheck;
}
//删除被选中的数据
function delectFile(){
	for(var i=0;i<currentData.length;i++){
		if(currentData[i].checked){
			currentData.splice(i,1);
			i--;//删除数据时数据会变少；
		}
	}
	return currentData;
}

//判断是否有子级来控制文件区域现实的
function changFileParent(data,id){
	if(wy.getChildrenById(data,currentId).length){
		filesParentNode.style.display="";
		noneFilesNode.style.display='';
	}else{	
		filesParentNode.style.display="none";
		noneFilesNode.style.display='block';
	}
}

//判断是否全选
function isClectAll(data){//所有子数据
	for(var i=0;i<data.length;i++){
		//判断当前对象下的checked属性，得知是否全选
		if(!data[i].checked){
			return false;
		}
	}
	return true;
}
//判断当前选中数据是否可以移动
function isCanMove(moveClickId,isClectedDatas){
	//不能移到当前所在的这一层级
	if(moveClickId == currentId) return false;
  return true;
}
//移动数据
function moveSelectedData(moveToData,moveToPid){
	//循环文件夹区域的所有文件
	for(var i=0;i<currentData.length;i++){
		if(currentData[i].checked){
			var moveData=currentData[i]
				//被选中的名字是否冲突
			if(!wy.nameCanUse(moveToData,currentData[i].name)){
				//如果名字冲突是否覆盖
				let alertMessage = confirm('有相同名字文件是否覆盖?');
				if(alertMessage){//如果覆盖
					var currentDataDelet=currentData.splice(i, 1)[0]// 一定要改变false
					currentDataDelet.checked=false;
					for(var j=0;j<moveToData.length;j++){
						if(currentDataDelet.name===moveToData[j].name){
							currentDataDelet.pid=moveToPid
							moveToData.splice(j,1);
							moveToData.push(currentDataDelet);
							break;
						}
						console.log(1)
					}
        			continue;
				}else{
					let alertMessage = confirm('是否保留两者?');
			        if(!alertMessage) continue;
					var currentDataDelet=currentData.splice(i, 1)[0]				
					currentDataDelet.checked=false;
					currentDataDelet.pid=moveToPid
					console.log(currentDataDelet)
					console.log(moveToData)
					currentDataDelet.name = moveData.name + '(副本)';
					moveToData.push(currentDataDelet);
				}
			}
		//把被移动的数据重原数据中删除并向要移动到的目标添加，
		moveData.checked=false;
		moveToData.push(currentData.splice(i, 1)[0]);
        i--;//数据减少；
		}
	}
	if(fileCheckAll.classList.contains('select-all')){
		initChecked();
	}
}
