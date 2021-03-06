class Drag {
	constructor(element){
		
	}
	drag(element){
		this.element=element;	//把拖拽的目标元素放到实例属性上，方便使用
		this.element.addEventListener(
			//this->指的是元素
			'mousedown',						
			this.downFn.bind(this)) //改变this指向，并且不执行函数,但会生成新的函数；
	}
	downFn(ev){
		
		//使用了bind,this->指的是实例
		this.dx=ev.clientX-this.element.offsetLeft;
		this.dy=ev.clientY-this.element.offsetTop;
		this.move=this.moveFn.bind(this);
		this.up=this.upFn.bind(this);
		
		document.addEventListener(
			'mousemove',
//						this.moveFn.bind(this)
			this.move
		)	
		document.addEventListener(
			'mouseup',
//						this.upFn.bind(this)
			this.up
		)
	}
	moveFn(ev){
		//这里的this指的是元素，而这里需要的是实例；
		//需要用bind转化一下；
		this.element.style.left=ev.clientX-this.dx+'px';
		this.element.style.top=ev.clientY-this.dy+'px';
	}
	upFn(){
		//经过转化后的this指的是实例
		document.removeEventListener(
			'mousemove',
//						this.moveFn.bind(this)
			this.move
		)
		document.removeEventListener(
			'mouseup',
//						this.upFn.bind(this)
			this.up
		)
	}
}