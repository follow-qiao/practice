var express = require("express");

var app = express();  //http

//配置静态目录访问路径

app.use('/abc',express.static('static'))

//访问根目录
app.get("/",function (req,res){
	//响应请求，发送数据
	//res.send("<div></div>");
	res.sendFile(__dirname+'/views/index.html');
})
//访问的是/about
app.get("/about",function (req,res){
	//响应请求，发送数据
	//res.send("<div></div>");
	res.sendFile(__dirname+'/views/about.html');
})


//配置ajax请求的路径

app.get("/api/user",function (req,res){
	//查数据库
	res.send({message:"成功了"})	
})

app.get("/api/password",function (req,res){
	//查数据库
	res.send({message:"密码匹配"})	
})

app.listen(8080,function (){
	console.log("启动成功");	
})
