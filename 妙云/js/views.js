//生成左侧树状列表
function createTreeHtml(data,id){
	var html=createTree(data,id);
	menuTreeParentNode.innerHTML=html;
	return data;
} 
//生成所有文件夹
function createFilesHtml(data,id){
	//先获取到当前id下所有子集;
	var datas=wy.getChildrenById(data,id);
	//获取到需要的文件结构的数组
	var lisHtml=createFiles(datas,id);
	    filesParentNode.innerHTML=lisHtml;
	    return datas;
}
//生成右侧导航线
function createBannerHtml(data,id){
	//获取到当前id所在对象的所有父级
	var linerParents=wy.getParentsById(data,id);
	//获取导航线结构的数组
	var bannerLineHtml=createBanner(linerParents.reverse(),id);
	bannerLinerParent.innerHTML=bannerLineHtml;
	return linerParents;
}
//(生成所有HTML的函数)
function showHTML(data,id){
	createTreeHtml(data,id)
	createBannerHtml(data,id)
	return createFilesHtml(data,id)
}
//生成移动文件结构
//function createMoveListMenuHtml(data,id){
//	var html = createTree(data, id);
//	var moveListMenu = document.querySelector('.move-function .move-to');
//	moveListMenu.innerHTML = html;
//}
