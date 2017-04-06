//订阅发布类
class SalesOffices{
	constructor(){
		//存放状态(数据类型)和订阅函数
		this.books={};
	}
	//订阅者的方法
	subscribe(statuss,func){
		//如果该类型下无数组，就给其一个空数组
		if(!this.books[statuss]){
			this.books[statuss]=[]
		}
		this.books[statuss].push(func)
	}
	//退订(删除数组中的数据)
	unsubscribe(statuss,func){
		var listeners=this.books[statuss];
		if(listeners){
			for(var i=0;i<listeners.length;i++){
				if(listeners[i]===func){ //func要用有名字的函数，因为匿名函数与自身不想等
					listeners.splice(i,1)
					break;
				}
			}
		}
	}
	//发布
	publish(statuss){
		var listeners=this.books[statuss]
		if(listeners){
			for(var i=0;i<listeners.length;i++){
				//因为数组里存的是要执行的函数
				listeners[i]() 
			}
		}
	}
}
var t=new SalesOffices
var xiaoMing=function(){
	console.log('通知小名')
}
t.subscribe('100m',xiaoMing)
t.subscribe('100m',function(){
	console.log('通知小红')
})
t.subscribe('200m',function(){
	console.log('通知小芳')
})
//小名退订
t.unsubscribe('100m',xiaoMing)

document.onclick=function (){
	t.publish('100m')
}