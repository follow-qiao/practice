var user_data = { 
  files: [
  	{
  		name: '根目录',
      id: 0,
      maxId: 8,
      checked: false,
      type: 'root',
      level:1,
      child:[
      	{
      		name:'电影',
	      	id:1,
	      	pid:0,
	      	checked: false,
	        type: 'folder',
	        level:2,
	        child:[
	        	{
	        		name:'动作片',
		        	id:2,
		        	pid:1,
		        	checked: false,
		        	type: 'folder',
		        	level:3,
		        	child:[]
	        	},{
	        		name:'喜剧片',
		        	id:3,
		        	pid:1,
		        	checked: false,
		        	type: 'folder',
		        	level:3,
		        	child:[]
	        	},{
	        		name:'动画片',
		        	id:4,
		        	pid:1,
		        	checked: false,
		        	type: 'folder',
		        	level:3,
		        	child:[
		        		{
		        			name:'斗破苍穹',
				        	id:5,
				        	pid:4,
				        	checked: false,
				        	type: 'folder',
				        	level:4,
				        	child:[]
		        		}
		        	]
	        	},{
	        			name:'战争片',
			        	id:6,
			        	pid:1,
			        	checked: false,
			        	type: 'folder',
			        	level:3,
			        	child:[]
	        	}
	        ]
      	},{
      		name:'游戏',
      		id:7,
	      	pid:0,
	      	checked: false,
	        type: 'folder',
	        level:2,
	        child:[]
      	},{
      			name:'资料',
      			id:8,
		      	pid:0,
		      	checked: false,
		        type: 'folder',
		        level:2,
		        child:[]
      	}
      ]
  	}
  ]
}