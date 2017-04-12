(function($){
	class Dialog{
		constructor(options){
			//设置默认的行为
			this.defaults={
				width:400,
				height:300,
				top:400,
				left:400,
				title:'这是弹框头部标题',
				content:'您好，我是一个弹框插件'	,
				okhandle:function(){
					console.log(this)
					this.dialog.remove();
				}
			}
			//深度复制，这样两个对象就没有关系了
			$.extend(true,this.defaults,options)
			//初始化
			this.init()
		}
		init(){
			//因为要对最外层元素进行操作，所以要提取出来挂在实例上
			this.dialog=this.creteDialog()
			//往页面中放入结构
			$('body').append(this.dialog);
			//获取确定按钮
			this.okEle=this.dialog.find('.ok')
			//获取取消按钮
			this.cancel=this.dialog.find('.cancel')
			//获取关闭按钮
			this.close=this.dialog.find('.close')
			
			this.addEvent();
		}
		//创建结构
		html(){
			return `<div class="dialogTop">
						<div class="title">${this.defaults.title}</div>
				        <span class="close" title="关闭">×</span>
					</div>
		            <div class="content">
		               ${this.defaults.content}
		            </div>
		            <div class="pop-btns">
		            	<button class="ok"> 确定</button>
		            	<button class="cancel"> 取消</button>
		            </div>	
				`
		}
		//创建弹框
		creteDialog(){
			var div=$('<div></div>')
			div.offset({top:this.defaults.top,left:this.defaults.left})
			div.width(this.defaults.width)
			div.height(this.defaults.height)
			div.addClass('full-pop')
			div.append(this.html())
			return div
		}
		addEvent(){
			var _this=this;
			this.okEle.on('click',this.defaults.okhandle.bind(this))
			this.close.click(function(){
				_this.dialog.remove()
			})
		}
	}
	//生成插件
	$.dialog=function(options){
		new  Dialog(options)
		return this;
	}
})(jQuery)