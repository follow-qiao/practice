# 淘宝PC端项目总结

[toc]

---

### 1.开发时间：5天半完成；
>淘宝首页：3天半；淘宝List页：1天； 淘宝detail页：1天；   
### 2.过程中遇到的问题：
>1.外边距合并问题：相邻兄弟元素之间，父元素与首子元素之间；
解决：1.一正一负，负值大于正值时，相加取绝对值；正负相同时取绝对值最大的那个外边距；
2.在父元素和首子元素之间把外边距隔开；要么给父給父级加padding、border、overflow:hidden;要么给子集float:left或display:inline-block或绝对定位；
由于ie6不支持display:inline-block;还会产生空格间距 
2.兼容ie6的透明度：
解决：Filter:alpha(opacity=num); num的取值范围是0-100之间的整数
但是他有继承性所以要配合着定位把不需要透明度的定位在它上面；
3.一行文字把多余的文字以小点点的形式显示：
解决：先是单词不换行 再把超出部分隐藏 最后把超出的文字以小点点的形                  式显示（overflow:hidden;text-overflow:ellipsis;white-space:nowrap;）
4.想解决ie6圆角问题（border-radius)：
解决：学到了优雅降级，也是为了展现新技术的美；（用内容撑开两侧圆角）
5.z-index问题：
解决：在整站中我用到了z-index的方法来提升层级达到自己想要的效果，感觉很棒；
6.在ie6下用Position:fixed来固定定位侧边栏是不行的：
解决：因为fixed的绝对位置是相对于html来说的，滚动条是html元素的，用position:absolute;来解决ie6下的固定定位问题；这时要让body保持原有高度，html只有一个窗口的高度；html{overflow:hidden;position:relaative;}body{height:100%;overflow:auto;}
7.看似模块内容在后却要先显示：
解决：在html中先写这一模块的内容，因为html文档从上倒下显示文档内容；
8.当搜索框中的文字超出搜索框时，最后一个文字看不到：
解决：给input元素加左右pandding，pandding值要大于小图标；
9.Ie6下双边距：
解决：要用display:inline;(由于浮动方向与margin方向一致产生了双边距)
10.Ie6下浮动元素与绝对定位元素同级，绝对定位元素消失：
解决：给定位元素加个父级；
11.ie6下li里元素都浮动，li元素下方会有4px间隙：
解决：给li元素加vertical-align或浮动；
12.Ie6当高度小余19px时：
解决：当高度小于19px时；高度会默认为19px;这时加上overflow:hidden;
### 3.我认为的亮点：
>1.图片下方透明度的处理：
因为：为了兼容ie6,这里不能用rgba;所以会用到opacity、filter:alpha(opacity:num)这里会有一个继承性的问题，所以要把不需要透明度的内容定位在上面；
### 4.该项目的技术总结
>1.要对项目表的样式进行规划、分类；
2给选择器取名一定要有意义；
3了解内容的先后展示顺序，从而确定html的先后顺序；
4.通过整站让我更好的掌握盒模型、定位、浮动等基础知识；掌握了一些处理ie兼容性的问题；
5.要把不需要经常更换的图片做成雪碧图；




