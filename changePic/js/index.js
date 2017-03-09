window.onload=function (){
	var btn1=document.getElementById('btn1');
	var btn2=document.getElementById('btn2');
	var btnDesc=document.getElementById('btn_des');
			
	var imgs=['img01.jpg','img02.jpg','img03.jpg','img04.jpg'];
	var desc=['无敌战车!','高科技采矿车','寻找外新人','炫酷的直升机'];
	var picNum=document.querySelector('.pic_num');
	var picDesc=document.querySelector('.pic_text');
	var prev=document.querySelector('.prev_icon');
	var next=document.querySelector('.next_icon');
	var img=document.querySelector('img');
	var tip=document.querySelector('.tip');
	
	var close=document.querySelector('.close');
	var sure=document.querySelector('.sure');
//	用来关联图片与上下张的关系
	var n=0;
//	用来关联上下张和循环模式的
	var flag=true;
//	用来关联是否弹出警告框
	var able=1;
//-------------选择循环方式-----------------------------------
	btn1.onclick=function (){
		if(able==1){
			btn1.className='circle';
			btn2.className='order';
			btnDesc.innerHTML='图片可以从最后一张跳转到第一张循环切换';
			flag=true;
		}		
	};
	btn2.onclick=function (){
		if(able==1){
			btn2.className='circle';
			btn1.className='order';
			btnDesc.innerHTML='图片只能到最后一张或第一张切换';	
			flag=false;
		}		
	};	
//-------------图片更换方式-------------------------------------
//----下一张图片-------
//	img.src='img/'+imgs[n];
//	picNum.innerHTML=(n+1)+'/'+imgs.length;
//	picDesc.innerHTML=desc[n];
	next.onclick=function (){
		if (able==1){
			n++;
			if (n>imgs.length-1){
				if(flag){
					n=0	
				}else{
					n=imgs.length-1;
					tip.style.display='block';
					able=2;
				}
			}		
		}
		changePic();	
	};	
//----上一张图片-------	
	prev.onclick=function (){
		if(able==1){
			n--;
			if(n<0){
				if(flag){
					n=imgs.length-1;
				}else{
					n=0;
					tip.style.display='block';
					able=2;
				}
			}
		}	
		changePic();
	}
//----------关闭警告框------------------------	
	close.onclick=sure.onclick=function (){
		tip.style.display='none';
		able=1;
	}
	function changePic(){
		img.src='img/'+imgs[n];
		picNum.innerHTML=(n+1)+'/'+imgs.length;
		picDesc.innerHTML=desc[n];
	}
};

