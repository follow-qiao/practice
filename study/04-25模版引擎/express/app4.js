var express = require("express");

var app = express();  //http

var fs = require("fs");

//配置静态目录访问路径

app.use('/abc',express.static('static'))

//需要后端的模板引擎
var swig  = require('swig');

//模板引擎怎么结合express使用

//设置视图的文件夹路径
app.set('views', './views')
app.set('view engine', 'html');
//引擎渲染的方法，以及渲染的文件的后缀名
app.engine('html', swig.renderFile);

//设置不缓存
swig.setDefaults({ cache: false });

//访问根目录
app.get("/",function (req,res){
	res.sendFile(__dirname+'/views/index.html');
})
//访问的是/about
app.get("/about",function (req,res){
	res.sendFile(__dirname+'/views/about.html');
})

//访问的是/article
app.get("/article",function (req,res){
	res.sendFile(__dirname+'/views/article.html');
})

//访问的是/article
/*
	路由规则 book/:id
	匹配到的是 book/1 book/2 books/3  book/abc

	id就是 1 2 3 abc
*/
app.get("/book/:id",function (req,res){

	//根据不同id找不同的数据，展示不同文章
	//拿到id，拿数据
	var id = req.params.id;

	//读取文件
	fs.readFile("./data/books.json", function (err,data){
		console.log( data );
		var books = JSON.parse(data.toString());

		//根据id找对应的数据
		
		//需要让这个html文件走模板引擎
		//缓存的机制
		// book 就是 views/book.html
		res.render('book',{
			data:books[id-1]
		});
	})

	
})



//配置ajax请求的路径

app.get("/api/user",function (req,res){
	//查数据库
	res.send({message:"成功了"})	
})

app.listen(8080,function (){
	console.log("启动成功");	
})
