var express = require("express");

var app = express();  //http

var fs = require("fs");

var bodyParser = require('body-parser');

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

//解析post为 application/x-www-form-urlencoded 的数据
// key=value&key=value
app.use(bodyParser.urlencoded({ extended: true }))

//自定义的中间件
app.use(function (req,res,next){
	var obj = {a:1};	

	req.obj = obj;

	console.log("我是自定义的中间件");

	next();
})

//访问根目录
app.get("/",function (req,res){
	res.sendFile(__dirname+'/views/index.html');
})
//访问的是/about
app.get("/about",function (req,res){
	res.sendFile(__dirname+'/views/about.html');
})

//访问的是/about
app.get("/user",function (req,res){
	res.sendFile(__dirname+'/views/user.html');
})

//访问的是/article
app.get("/article",function (req,res){
	res.sendFile(__dirname+'/views/article.html');
})

//配置ajax请求的路径

var arr = ["leo","momo"]

app.get("/api/user",function (req,res){

	/*
		怎么拿到get请求的数据
			req.query

	*/

	console.log( req.query.user );

	if(arr.indexOf(req.query.user) !== -1){
		//查数据库
		res.send({message:"用户存在"})
	}else{
		res.send({message:"用户不存在"})
	}	
})

//post请求
app.post('/api/test',function (req,res){

	/*
		post请求的数据,需要一个中间件帮助处理
			body-parser  npm install body-parser --save-dev
	*/
	console.log(req.obj);
	console.log( req.body );

	res.send({message:"post"})	
})

app.listen(8080,function (){
	console.log("启动成功");	
})
