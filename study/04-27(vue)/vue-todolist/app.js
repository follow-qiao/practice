
let storage = {
	fetch(key){  //获取
		return JSON.parse(localStorage.getItem(key)) || [];
	},
	save(key,value){
		localStorage.setItem(key,JSON.stringify(value))
	}
}


//页面初始化时，先去localstorage中找
// 找到 或 没找到

var list = storage.fetch("miaov-miaov");

// 机制，监控某个数据，发生变化 watch

var vm = new Vue({
	el:"#app",
	data:{
		list:list,
		newTodo:'',
		currentEditTodo:'',
		beforeEditTitle: '',  //编辑之前的title
		dataType:"completed"
	},
	watch:{
		list:{
			deep:true,
			handler(){
				//一旦发生变化，存值
				console.log("我发生了变化，存值");
				storage.save("miaov-miaov",this.list);
			}
		}
	},
	computed:{
		unSelectedNum(){
			return this.list.filter(function (item){
				return !item.isSelected
			}).length
		},
		isAllSelected:{
			get(){
				return this.list.length === this.list.filter(function(item){
	                        return item.isSelected
	                    }).length
			},
			set(newVal){
				this.list.forEach(function (item){
					item.isSelected = newVal;	
				})
			}
		},
		filterList:function (){  //用来过滤list
			//对list有三种情况
			if(this.dataType === 'all'){
				return this.list;
			}else if(this.dataType === 'active'){
				return this.list.filter(function (item){
					return !item.isSelected
				});
			}else if(this.dataType === 'completed'){
				return this.list.filter(function (item){
					return item.isSelected
				});
			}else{
				return this.list;
			}
		}
	},
	methods: {
		addTodo(ev){

			this.list.push({
				title:this.newTodo,
				isSelected:false
			})

			this.newTodo = '';

			/*this.list.push({
				title:ev.target.value,
				isSelected:false
			})

			ev.target.value = '';*/
		},
		removeTodo(index){
			// todo是一条数据
			//this.list.splice(this.list.indexOf(todo),1)
			this.list.splice(index,1)
		},
		editTodo(todo){
			//拿到要编辑的数据
			this.currentEditTodo = todo;
			//把要编辑数据的title存一下，目的是在取消编辑的时候使用
			this.beforeEditTitle = todo.title
		},
		editDone(){
			this.currentEditTodo = '';
		},
		cancelEdit(todo){  //取消编辑
			this.currentEditTodo = '';

			//在编辑的存一下title,等到取消的时候，把之前的title赋值给现在的title

			todo.title = this.beforeEditTitle;
		},
		clearCompleted(){
			//清除选中的
			this.list = this.list.filter(function (item){
				return !item.isSelected;
			})
		}
	}
});

function hashchange(){
	//拿到hash值
	var hash = window.location.hash.slice(1);

	//拿hash值的目的？？？？？
	//那hash值来过滤数据
	/*
		all 所有数据
		active  未选中的数据
		completed 选中的数据
	*/

	if(hash){
		vm.dataType = hash;
	}else{
		hash = 'all';
	}
	
}

//怎么知道hash改变了？

window.addEventListener('hashchange',hashchange)

hashchange();


