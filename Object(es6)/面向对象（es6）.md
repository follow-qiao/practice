#  面向对象（es6）

标签（空格分隔）： es6 class

---
[TOC]
### 1. 面向对象的思想
> 类：描述一组具有相同特性（属性）和功能（方法）的对象；

> 对象：类的具体体现；

### 2. 语法糖 
>简化一些操作；

### 3. es6使用class声明一些类
```
class className{
    constructor(){}  //当使用new创建对象，会自动调用这个函数；
}
new className:
    1. 隐式的创建一个对象
    2. 函数中this指向对象
    3. 执行函数，通过this给对象挂载属性
    4. 自动的返回对象
    5.方法，都会挂载原型上
```
示例1：
```
//声明类
class Person{
	constructor(name,age){
		console.log('我被调用了');
		console.log(name,age);
		this.name=name;
		this.age=age;
	}
	//下面的方法会挂载在原型上；
	say(){
		console.log('我的名字'+this.name);
	}
	run(){
		console.log('我会奔跑')
	}
}
console.log(typeof Person)	//function
//这里会直接运行函数，返回对象；
var p1=new Person('leo',30);//Person {name: "leo", age: 30}
```
### 4. 继承
>1. 继承，当子类没有自己的属性就不用写constructor也会继承；
2. 当子类有自己的属性时一定要写constructor,并且一定要写super否则会报错;

1. 表达式：class 子集类名 extends 父级类名;
2. 使用constructor时，一定要用super,否则会报错，this找不到;
3. 再父级的this的基础上增加属性；
4. 调用supper确保构建了父级this;
示例2：继承示例1的属性，并添加新的属性
```
//继承
class Coder extends Person{
	constructor(name,age){
		super(name,age)     //一定要用super,找到父级this,否则报错
		this.coding=10000;
	}
	codin(){
		console.log('我是子集')
	}
}
var c=new Coder('leo',40);
console.log(c)	//Coder {name: "leo", age: 40, coding: 10000}
```
### 5. 静态属性
>定义：定义到函数上的属性，称之为静态属性；

1. 写在class内的书写形式，'static 属性名()';
2. 写在class外的书写形式，'类名 属性名()';
3. 只有在类名下才能访问的到，实例下访问不到；
例子：
```
class Person{
	constructor(){
		
	}
	static fn(){  //写在class内的静态属性，用'static 属性名（）'
		
	}
}
//定义在函数身上的属性
Person.abc=function (){  //写在class外的形式
	
}
var p=new Person();
console.log(p.abc);	//undefined
console.log(Person.abc);	//function (){}
console.log(Person.fn)  //function (){}
console.log(p.fn)   //undefined
```
### 6.声明类 不会提升在当前作用域的最顶端
例子：
```
var t=new Person(); //Person is not defined(…) 报错了
t.play();
class Person{			//声明类不会提升当前作用域的最顶端
	constructor(){
		
	}
	static fn(){
		
	}
	play(){
		console.log("我是play");
	}
}
```
```
//Person 就是类名
var Person = class P {  // P只能在类中使用

}
var p1 = new Person;
console.log( p1 );
```
### 7.Object.assign
>Object.assign(target,...sources);
作用：用于将所有可枚举的属性的值从一个或多个源对象复制到目标对象；
1. target:目标对象；  sources:要合并的对象；
2. 它将返回target

示例：
```
var obj={
		a:1
	}
	var obj1={
		a:1000,
		b:2,
		c:[1,2,3]
	}
	var o=Object.assign(obj,obj1,{c:3});
	console.log(o===obj);//返回目标对象；
	console.log(obj) //Object {a: 1000, b: 2, c: 3}
	
	//把obj1复制一份
	var newObj1=Object.assign({},obj1)
	console.log(newObj1)//Object {a: 1000, b: 2, c: Array[3]}
```



### 8. 拖拽
>bind():第一个参数代表this的指向，不会执行函数，会得到一个新的函数；当多次用到同一个用bind修改this指向的函数，要把转化后的函数存起来

关键点：
1. 改变this指向；
2. 改变函数的this指向；并把返回函数存起来，保证使用的是同一个函数；
```
class Drag {
    constructor(element){
    	
    }
	drag(element){
		this.element=element;//目标元素放到实例属性上，方便使用
		this.element.addEventListener(//this->指的是元素
			'mousedown',
			//改变this指向，并且不执行函数,但会生成新的函数；
			this.downFn.bind(this)) 
		}
		downFn(ev){
			//使用了bind,this->指的是实例
			this.dx=ev.clientX-this.element.offsetLeft;
			this.dy=ev.clientY-this.element.offsetTop;
			this.move=this.moveFn.bind(this);
			this.up=this.upFn.bind(this);
			document.addEventListener(
				'mousemove',
//				this.moveFn.bind(this)
				this.move
			)	
			document.addEventListener(
				'mouseup',
//				this.upFn.bind(this)
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
//				this.moveFn.bind(this)
				this.move
			)
			document.removeEventListener(
				'mouseup',
//				this.upFn.bind(this)
				this.up
			)
		}
	}
	var d=new Drag();
	d.drag(box)
```

### 9.弹框
1. 生成html结构；
2. 创建元素存放结构；
3. 把元素存在实例下方便使用；
4. 对弹框定位；
5. 对弹框添加点击事件；
6. 使用Object.assign（默认数据，传入数据）的方法得到新的数据，存放到实例下方便使用；也就是说传入数据会对默认数据进行添加和补充；

